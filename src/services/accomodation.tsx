import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Accomodations = {

    getAccomodation: async (setAccomoodation: (accomodation: any | null) => void) => {
        const user = auth()?.currentUser;
        const restaurantsCollection = firestore().collection('accomodation');
        restaurantsCollection.onSnapshot((snapShot) => {
            return new Promise<Event[]>(resolve => {
                const accomodation = snapShot.docs.map((document) => {
                    const obj = document.data();
                    obj.id = document.id;
                    document.ref.collection('reviews').onSnapshot((snapS) => {
                        return new Promise<Event[]>(resolve => {
                            const size = snapS.size;
                            const rates = snapS.docs.map((documents) => parseFloat(documents.data().review));
                            const rate = snapS.docs.map((doc) => doc.data().accomodationId);
                            const rating = rates.reduce((total, val) => total + val) / size;
                            obj.review = rating;
                            obj.size = rates.length;
                            const review = rating as Event;
                            setAccomoodation(accomodation);
                            
                            return accomodation;
                        })
                    })
                    const newObj = obj as Event;
                    return newObj;
                });
                resolve(accomodation);
            });
        })
    },

    getReview: async (accomodationId: string, setReviews: (reviews: any | null) => void) => {
        return firestore().collection("accomodation").where('accomodationId', '==', accomodationId)

            .onSnapshot((snapShot) => {
                return new Promise<Event[]>(resolve => {
                    const reviews = snapShot.docs.map((document) => {
                        const obj = document.data();
                        obj.id = document.id;

                        document.ref.collection('reviews').onSnapshot((snapS) => {
                            return new Promise<Event[]>(resolve => {
                                const size = snapS.size;
                                const rates = snapS.docs.map((documents) => documents.data());
                                obj.size = rates.length;
                                const review = rates as Event;
                                setReviews(review);
                                return review;
                            })
                        })
                        const newObj = obj as Event;
                        // console.log({newObj})
                        return newObj;
                    });
                    resolve(reviews);
                });
                
            })
    },

}

export default Accomodations;