import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Restaurants = {
getRestaurant: async (setRestaurants: (restaurants: Array<array> | null, reviews: Array<array> | null) => void) => {
   
    const user = auth()?.currentUser;
   
    const restaurantsCollection = firestore().collection('restaurants').limit(3);
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
                            setRestaurants(data, null)
                        } else if (exist && exist1) {
                            setRestaurants(data, review)
                        } else {
                            setRestaurants(null, null)
                        }
                    })
                })
             })
     })
},

getSpecials: async (setSpecials: (specials: Array<array> | null,  reviews: Array<array> | null) => void) => {

    const user = auth()?.currentUser;
   
    const specialCollection = firestore().collection('restaurants').limit(3).where('isSpecial', '==', true);
    return specialCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;
             return documents.ref.collection('specials').onSnapshot((snapS)  => {
                    const size = snapS.size;
                    snapS.docs.map((docs) => {
                        const review = [documents.data()] as Array<array>;
                        const exist1 = documents.exists;
    
                        if (exist) {

                            setSpecials(data, null)
                        } else if (exist && exist1) {
                                    console.log(exist1)
                            setSpecials(data, review)
                        } else {
                            setSpecials(null, null)
                        }
                    })
                })
          })
     })
},

getReview: async(restuarantId: string, setReview: (reviews: Array<array> | null) => void) => {
        
    const specialCollection = firestore().collection('restaurants').where('restuarantId', '==', restuarantId);
    return specialCollection.onSnapshot((snapShot) => {
             snapShot.docs.map((document) => {
                 document.ref.collection('reviews').onSnapshot((snap2) => {
                return  snap2.docs.map((doc) => {
                            const data = [doc.data()] as Array<array>;
                            const exist = doc.exists;

                            if(exist) {
                                setReview(data);
                            } else {
                                setReview(null);
                            }
                    })
                })    
            })
    })

}

}

export default Restaurants;