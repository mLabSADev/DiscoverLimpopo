import firestore from "@react-native-firebase/firestore";

type array = []

const Events = {

getEvents: async ( setEvents: (event: any | null) => void) => {
  const snapchot = await firestore().collection('events').get();
        return new Promise <Event[]> (resolve => {
            const v = snapchot.docs.map(x => {
                const obj = x.data();
                obj.id = x.id;
                return obj as Event;
            });
            resolve(v);
            setEvents([...v])
            // console.log({...v})
        });
},

}


export default Events;