import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

type array = []


const BookingService = {


getBooking:  async (setBooking: (booking: any | null) => void) => {

    const user = auth()?.currentUser?.uid;
    const snapchot = await firestore().collection('bookings').where('userDetails.uid', '==', user).get();
    return new Promise <Event[]> (resolve => {
        const v = snapchot.docs.map(x => {
            const obj = x.data();
            obj.id = x.id;
            return obj as Event;
        });
        resolve(v);
        setBooking([...v])
        console.log({...v})
    });
},


updateBookingReview: async(
    userName: string,
    image: string,
    description: string,
    isMessage: boolean, 
    review: number, 
    accomodationId: string, 
    bookingId: string,
) => {
    return await firestore().collection('bookings').doc(bookingId).update({
        name: userName,
        image: image,
        description: description,
        isMessage: isMessage,
        review: review,
    }).then(() => {

        BookingService.sendBookingReview(userName, image, description, isMessage, review, accomodationId, bookingId);
    }).catch((error) => {console.log(error, 'this error is in update booking review method')})
},

sendBookingReview: async (
    userName: string,
    image: string,
    description: string,
    isMessage: boolean, 
    review: number, 
    accomodationId: string, 
    bookingId: string,
    // sendReview: (booking: Array<array> | null) => void
    ) => {

        return await firestore().collection('accomodation').doc(accomodationId).collection('reviews').doc(bookingId).set({
            name: userName,
            image: image,
            review: review,
            reviewDescription: description,
            uid: auth()?.currentUser?.uid,
            isMessage: isMessage,
        }).then(() => {}).catch((error) => {console.log(error, 'this error is in update booking review method')})
},

bookRoom: async ( 
    accomodationId: string, 
    accomodationName: string, 
    checkIn: string, 
    checkOut:string,
    guest: number,
    nights: number,
    roomId: string,
    roomName: string,
    roomPrice: string,
    isPaid: boolean,
    totalAmount: number,
    user: {},
    setBookingId: (bookingId: string | null) => void
    ) => {

    return await firestore().collection('bookings').add({
        accomodationId: accomodationId,
        accomodationName: accomodationName,
        checkIn: checkIn,
        checkOut: checkOut,
        guest: guest,
        nights: nights,
        roomId: roomId,
        roomName: roomName,
        roomPrice:roomPrice,
        paid: isPaid,
        review: 0,
        totalAmount:totalAmount,
        userDetails: user
    }).then((doc) => {
      const bookingId = doc.id;
      setBookingId(bookingId);
        doc.update({
            bookingId: doc.id
        }).then(() => {}).catch((error) => {console.log(error)})
        // console.log(bookingId)
      
    }).catch((error) => {console.log({error})})

},


}
export default BookingService;