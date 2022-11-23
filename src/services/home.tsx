import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Homes = {
getRestaurant: async (setRestaurants: (restaurants: Array<array> | null, numOfReview: number) => void) => {
   
    const user = auth()?.currentUser;
   
    const restaurantsCollection = firestore().collection('restaurants').limit(3);
    return restaurantsCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

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

getAccomodation:  async (setAccomoodation: (accomodation: Array<array> | null, numOfReview: number) => void) => {
    const user = auth()?.currentUser;
   
    const restaurantsCollection = firestore().collection('accomodation').limit(3);
    return restaurantsCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

             
                return  documents.ref.collection('reviews').onSnapshot((snapS)  => {
                    const size = snapS.size;
                    const rates = snapS.docs.map((rate) => parseFloat(rate.data().review));
                    // console.log(size, 'the size of the size', snapShot.size)
                    snapS.docs.map((docs) => {
                        const rate = rates.reduce((total, val) => total + val) / size;
                        const exist1 = documents.exists;
    
                        if (exist) {

                            setAccomoodation(data, rate)
                        } else if (exist && exist1) {

                            setAccomoodation(data, rate)
                        } else {

                            setAccomoodation(null, 0)
                        }
                    })
                })
             })
     })

},


}

export default Homes;