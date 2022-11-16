import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const BookingService = {

getBooking:  async (setBooking: (booking: Array<array> | null, reviews: Array<array> | null) => void) => {
    const user = auth()?.currentUser;
    
    const restaurantsCollection = firestore().collection('bookings').where('uid', '==', user?.uid)
    return restaurantsCollection.onSnapshot((snapShot) => {
            snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

            return  documents.ref.collection('reviews').onSnapshot((snapS)  => {
                    const size = snapS.size;
                    snapS.docs.map((docs) => {
                        const review = [documents.data()] as Array<array>;
                        const exist1 = documents.exists;
    
                        if (exist) {
                            setBooking(data, null)
                        } else if (exist && exist1) {
                            setBooking(data, review)
                        } else {
                            setBooking(null, null)
                        }
                    })
                })
                })
        })
}
}

export default BookingService;