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

 getReview: async (restaurantId: string, setReviews: (reviews: any | null) => void) => {
        const snapchot = await firestore().collection('restaurants').where('restaurantId', '==', restaurantId).get();
        const snap = snapchot.docs.map((document) => {
        const withinSnap = document.ref.collection('reviews').get();
        const snapping = withinSnap.then((documents) => {
            return new Promise <Event[]> (resolve => {
                const v = documents.docs.map(x => {
                    const obj = x.data();
                    obj.id = x.id;
                    return obj as Event;
                });
                resolve(v);
                setReviews([...v])
                 console.log({...v},"the id is null")
            });
        } )
        
        });
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
            Restaurants.updateReview(restaurantId)
        }).catch((error) => { console.log(error, 'this error is in update booking review method') })
    },

updateReview: async (restaurantId: string,) => {
        const updates = firestore().collection('restaurants').doc(restaurantId).get();
        updates.then((snapchot) => {
            // const overAllReview = snapchot.data().overAllReview;
            // const reviewSize = snapchot.data().reviewSize;
            snapchot.ref.collection('reviews').onSnapshot((docuSnap) => {
                new Promise<Event[]>(resolve => {
                    const size = docuSnap.size;
                    const rates = docuSnap.docs.map((documents) => parseFloat(documents.data().review));
                    const rating = rates.reduce((total, val) => total + val) / size;
                    snapchot.ref.update({
                        overAllReview: rating,
                        reviewSize: size,
                    }).then(() => {console.log('done')}).catch((error) => {console.log(error, 'cant update the overall and size')})
                    resolve(rates)
                })
            })
        })
}
}

export default Restaurants;