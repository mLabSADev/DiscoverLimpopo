import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

type array = []


const BookingService = {


getBooking:  async (setBooking: (booking: any | null) => void) => {

    const snapchot = await firestore().collection('bookings').where('uid', '==', auth()?.currentUser?.uid).get();
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
        userName: userName,
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

bookRoom: () => {

}

}

export default BookingService;