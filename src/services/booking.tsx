import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

type array = []


const BookingService = {


getBooking: async (setBooking: (booking: any | null) => void) => {

    const user = auth()?.currentUser?.uid;
    const snapchot = await firestore().collection('bookings').where('userDetails.uid', '==', user).get();
    return new Promise<Event[]>(resolve => {
        const v = snapchot.docs.map(x => {
            const obj = x.data();
            obj.id = x.id;
            return obj as Event;
        });
        resolve(v);
        setBooking([...v])
        // console.log({ ...v })
    });
},

getBookingReview: async (accomodationId: string, bookingId: string, setReview: (review: any | null) => void) => {

    const user = auth()?.currentUser?.uid;
    const snapShot = await firestore().collection('accomodation').where('accomodationId', '==', accomodationId).get();
    snapShot.docs.map((queryDocument) => {
        queryDocument.ref.collection("reviews").where("bookingId", "==", bookingId).get().then((snapchot) => {
            // return new Promise<Event[]>(resolve => {
                const v = snapchot.docs.map(x => {
                    const obj = x.data();
                    obj.id = x.id;
                    if(x.exists) {
                       setReview(obj);
                    return obj ;
                    } else {
                        setReview("");
                    return null;
                    }
                });
                // resolve(v);
                //setReview(v)
                //  console.log(v, "the reviews")
            // });
        })
    })
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
            bookingId: bookingId,
            timeStamp: firestore.Timestamp.toString(),
        }).then(() => { BookingService.updateReview(accomodationId).then(() => {}).catch((error) => {console.log(error)}) }).catch((error) => { console.log(error, 'this error is in update booking review method') })
    },

    updateReview: async (accomodationId: string,) => {
        const updates = firestore().collection('accomodation').doc(accomodationId).get();
        updates.then((snapchot) => {
            // const overAllReview = snapchot.data().overAllReview;
            // const reviewSize = snapchot.data().reviewSize;
            snapchot.ref.collection('reviews').onSnapshot((docuSnap) => {
                new Promise<Event[]>(resolve => {
                    const size = docuSnap.size;
                    const rates = docuSnap.docs.map((documents) => parseFloat(documents.data().review));
                    const rating = (rates.reduce((total, val) => total + val) / size).toFixed(1);
                    
                    snapchot.ref.update({
                        overAllReview: parseFloat(rating),
                        reviewSize: size,
                    }).then(() => {console.log('done')}).catch((error) => {console.log(error, 'cant update the overall and size')})
                   
                    resolve(rates)
                })
            })
        })
},

    bookRoom: async (
        accomodationId: string,
        accomodationName: string,
        checkIn: string,
        checkOut: string,
        guest: number,
        nights: number,
        numberOfRoom: number,
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
            numberOfRoom: numberOfRoom,
            roomId: roomId,
            roomName: roomName,
            roomPrice: roomPrice,
            paid: isPaid,
            review: 0,
            totalAmount: totalAmount,
            userDetails: user
        }).then((doc) => {
            const bookingId = doc.id;
            setBookingId(bookingId);
            doc.update({
                bookingId: doc.id
            }).then(() => { }).catch((error) => { console.log(error) })
            // console.log(bookingId)

        }).catch((error) => { console.log({ error }) })

    },


}
export default BookingService;