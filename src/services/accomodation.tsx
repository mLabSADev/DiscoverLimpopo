import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []




const Accomodations = {

    getAccomodation:  async (setAccomoodation: (accomodation: Array<array> | null, reviews: Array<array> | null) => void) => {
        const user = auth()?.currentUser;
       
        const restaurantsCollection = firestore().collection('accomodation');
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

export default Accomodations;