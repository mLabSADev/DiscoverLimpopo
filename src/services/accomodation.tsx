import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []


const Accomodations = {

getAccomodation: async (setAccomoodation: (accomodation: any | null) => void) => {
        const snapchot = await firestore().collection('accomodation').get();
        return new Promise <Event[]> (resolve => {
            const v = snapchot.docs.map(x => {
                const obj = x.data();
                obj.id = x.id;
                return obj as Event;
            });
            resolve(v);
            setAccomoodation([...v])
            // console.log({...v})
        });
    },
    
    
getReview: async (accomodationId: string, setReviews: (reviews: any | null) => void) => {

    const snapchot = await firestore().collection('accomodation').where('accomodationId', '==', accomodationId).get();
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
            // console.log({...v})
        });
    } )
    
    });

},

getRooms: async (accomodationId: string, setRooms: (rooms: any | null) => void) => {

    const snapchot = await firestore().collection('accomodation').where('accomodationId', '==', accomodationId).get();
    // const snap = snapchot.docs.map((document) => {
    // const withinSnap = document.ref.collection('reviews').get();
    // const snapping = document..then((documents) => {
        return new Promise <Event[]> (resolve => {
            const v = snapchot.docs.map(x => {
                const obj = x.data().rooms;
                obj.id = x.id;
                return obj as Event;
            });
            resolve(v);
            setRooms([...v])
            // console.log({...v})
        });
    // })
    
    // });

},

}

export default Accomodations;