import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

type array = []


const BookingService = {


getBooking:  async (setBooking: (booking: Array<array> | null) => void) => {
    const user = auth()?.currentUser;
    
    const restaurantsCollection = firestore().collection('bookings').where('uid', '==', user?.uid)
    return restaurantsCollection.onSnapshot((snapShot) => {
            snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

                setBooking(data, );
            // return  documents.ref.collection('reviews').onSnapshot((snapS)  => {
            //         const size = snapS.size;
            //         snapS.docs.map((docs) => {
            //             const review = [documents.data()] as Array<array>;
            //             const exist1 = documents.exists;
    
            //             if (exist) {
            //                 setBooking(data, null)
            //             } else if (exist && exist1) {
            //                 console.log({data});
            //                 setBooking(data, review)
            //             } else {
            //                 setBooking(null, null)
            //             }
            //         })
            //     })
                 })
        })
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

}

export default BookingService;