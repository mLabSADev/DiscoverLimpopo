import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Homes = {
    getRestaurant: async (setRestaurants: (restaurants: any | null) => void) => {

        const user = auth()?.currentUser;
        const restaurantsCollection = firestore().collection('restaurants').limit(3);
        restaurantsCollection.onSnapshot((snapShot) => {

            return new Promise<Event[]>(resolve => {
                const restaurants = snapShot.docs.map((document) => {

                    const obj = document.data();
                    obj.id = document.id;

                    document.ref.collection('reviews').onSnapshot((snapS) => {

                        return new Promise<Number[]>(resolve => {
                            const size = snapS.size;

                            const rates = snapS.docs.map((documents) => parseFloat(documents.data().review));
                            // console.log(rates, size)
                            const rating = rates.reduce((total, val) => total + val) / size;

                            obj.review = rating; //total rates
                            obj.size = rates.length; //total reviews
                            const review = rating as Number;

                            //   const accom = accomodation as array;
                            //  console.log(review); => correct number that should be pushed
                            setRestaurants(restaurants);
                            //   console.log(accom)
                            resolve(rates)
                            return review;

                        })

                    })

                    const newObj = obj as Event;
                    return newObj;

                });
                resolve(restaurants);
                // console.log({...v})
            });
        })
    },

    getAccomodation: async (setAccomoodation: (accomodation: any | null) => void) => {

        const user = auth()?.currentUser;
        const restaurantsCollection = firestore().collection('accomodation').limit(3);
        restaurantsCollection.onSnapshot((snapShot) => {

            return new Promise<Event[]>(resolve => {
                const accomodation = snapShot.docs.map((document) => {

                    const obj = document.data();
                    obj.id = document.id;

                    document.ref.collection('reviews').onSnapshot((snapS) => {

                        return new Promise<Number[]>(resolve => {
                            const size = snapS.size;

                            const rates = snapS.docs.map((documents) => parseFloat(documents.data().review));
                            // console.log(rates, size)
                            const rating = rates.reduce((total, val) => total + val) / size;

                            obj.review = rating; //total rates
                            obj.size = rates.length; //total reviews
                            const review = rating as Number;

                            //   const accom = accomodation as array;
                            //  console.log(review); => correct number that should be pushed
                            setAccomoodation(accomodation);
                            //   console.log(accom)
                            resolve(rates)
                            return review;

                        })

                    })

                    const newObj = obj as Event;
                    return newObj;

                });
                resolve(accomodation);
                // console.log({...v})
            });


        })

    },


}

export default Homes;
