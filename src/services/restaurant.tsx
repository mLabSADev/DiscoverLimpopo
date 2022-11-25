import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Restaurants = {
    getRestaurant: async (setRestaurants: (restaurants: any | null) => void) => {
        const user = auth()?.currentUser;
        const restaurantsCollection = firestore().collection('restaurants');
        restaurantsCollection.onSnapshot((snapShot) => {

            return new Promise<Event[]>(resolve => {
                const restaurants = snapShot.docs.map((document) => {

                    const obj = document.data();
                    obj.id = document.id;

                    document.ref.collection('reviews').onSnapshot((snapS) => {

                        return new Promise<Event[]>(resolve => {
                            const size = snapS.size;

                            const rates = snapS.docs.map((documents) => parseFloat(documents.data().review));
                            // console.log(rates, size)
                            const rating = rates.reduce((total, val) => total + val) / size;

                            obj.review = rating; //total rates
                            obj.size = rates.length; //total reviews
                            const review = rating as Event;

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

getSpecials: async (setSpecials: (specials: any | null) => void) => {

    const user = auth()?.currentUser;
    const restaurantsCollection = firestore().collection('restaurants').where('isSpecial', '==', true);
    restaurantsCollection.onSnapshot((snapShot) => {

        return new Promise<Event[]>(resolve => {
            const restaurants = snapShot.docs.map((document) => {

                const obj = document.data();
                obj.id = document.id;

                document.ref.collection('reviews').onSnapshot((snapS) => {

                    return new Promise<Event[]>(resolve => {
                        const size = snapS.size;

                        const rates = snapS.docs.map((documents) => parseFloat(documents.data().review));
                        // console.log(rates, size)
                        const rating = rates.reduce((total, val) => total + val) / size;

                        obj.review = rating; //total rates
                        obj.size = rates.length; //total reviews
                        const review = rating as Event;

                        //   const accom = accomodation as array;
                        //  console.log(review); => correct number that should be pushed
                        setSpecials(restaurants);
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

sendRestaurantReview: async (
    userName: string,
    image: string,
    description: string,
    isMessage: boolean, 
    review: number, 
    restaurantId: string, 
    uid: string,
    // sendReview: (booking: Array<array> | null) => void
    ) => {
        return await firestore().collection('restaurants').doc(restaurantId).collection('reviews').add({
            name: userName,
            image: image,
            review: review,
            reviewDescription: description,
            isMessage: isMessage,
            uid: uid,
            restaurantId: restaurantId,
        }).then(() => {
            console.log({
                userName, image, review, description, isMessage, uid, restaurantId
            })
        }).catch((error) => {console.log(error, 'this error is in update booking review method')})
},

}

export default Restaurants;