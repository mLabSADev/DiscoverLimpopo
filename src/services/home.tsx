import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Homes = {
getRestaurant: async (setRestaurants: (restaurants: Array<array> | null, reviews: Array<array> | null) => void) => {
   
    const user = auth()?.currentUser;
   
    const restaurantsCollection = firestore().collection('restaurants').limit(3);
    return restaurantsCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

                // if(exist) {
                //     setRestaurants(data)
                // } else {
                //     setRestaurants(null);
                // }
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

getAccomodation:  async (setAccomoodation: (accomodation: Array<array> | null, reviews: Array<array> | null) => void) => {
    const user = auth()?.currentUser;
   
    const restaurantsCollection = firestore().collection('accomodation').limit(3);
    return restaurantsCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

                // if(exist) {
                //     setRestaurants(data)
                // } else {
                //     setRestaurants(null);
                // }
            return  documents.ref.collection('reviews').onSnapshot((snapS)  => {
                    const size = snapS.size;
                    snapS.docs.map((docs) => {
                        const review = [documents.data()] as Array<array>;
                        const exist1 = documents.exists;
    
                        if (exist) {

                            setAccomoodation(data, null)
                        } else if (exist && exist1) {

                            setAccomoodation(data, review)
                        } else {

                            setAccomoodation(null, null)
                        }
                    })
                })
             })
     })

}



}

export default Homes;