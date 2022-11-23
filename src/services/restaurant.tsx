import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Restaurants = {
getRestaurant: async (setRestaurants: (restaurants: Array<array> | null,numOfReview: number) => void) => {
   
    const user = auth()?.currentUser;
   
    const restaurantsCollection = firestore().collection('restaurants').limit(3);
    return restaurantsCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;
                // console.log({data})

                return  documents.ref.collection('reviews').onSnapshot((snapS)  => {
                    const size = snapS.size;
                    const rates = snapS.docs.map((rate) => parseFloat(rate.data().review));
                    // console.log(size, 'the size of the size', snapShot.size)
                    snapS.docs.map((docs) => {
                        const rate = rates.reduce((total, val) => total + val) / size;
                        const exist1 = documents.exists;
                        if (exist) {

                            setRestaurants(data, rate);
                        } else if (exist && exist1) {

                            setRestaurants(data, rate);
                        } else {

                            setRestaurants(null, 0);
                        }
                    })
                })
             })
     })
},

getSpecials: async (setSpecials: (specials: Array<array> | null, numOfReview: number) => void) => {

    const user = auth()?.currentUser;
   
    const specialCollection = firestore().collection('restaurants').limit(3).where('isSpecial', '==', true);
    return specialCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;
             return documents.ref.collection('reviews').onSnapshot((snapS)  => {
                const size = snapS.size;
                const rates = snapS.docs.map((rate) => parseFloat(rate.data().review));
                // console.log(size, 'the size of the size', snapShot.size)
                snapS.docs.map((docs) => {
                    const rate = rates.reduce((total, val) => total + val) / size;
                    const exist1 = documents.exists;
                        if (exist) {

                            setSpecials(data, rate)

                        } else if (exist && exist1) {

                                    console.log(exist1)

                            setSpecials(data, rate)

                        } else {
                            setSpecials(null, 0)
                        }
                    })
                })
          })
     })
},

getReview: async (accomodationId: string, setReviews: (reviews: Array<array> | null, rating: number) => void) => {
    return firestore().collection("restaurants").where('restuarantId', '==', accomodationId)
        .onSnapshot((snapShot) => {
            return snapShot.docs.map((snaps) => {
                snaps.ref.collection("reviews").onSnapshot((doc) => {
                    const rates = doc.docs.map((rate) => parseFloat(rate.data().review));
                    doc.docs.map((document) => {
                        const rate = rates.reduce((total, val) => total + val) / doc.size;
                        if(document.exists) {
                            const review = [document.data()] as Array<array>;
                                // console.log(rate, 'the total rates', rates)
                            setReviews(review, rate)
                        } else {
                            setReviews([], rate);
                        }
                    })
                })
            })
        })
},


}

export default Restaurants;