import firestore from "@react-native-firebase/firestore";

type array = []

const Events = {

getEvents: async ( setEvents: (event: Array<array> | null) => void) => {
const eventCollection = firestore().collection('events');
   return eventCollection.onSnapshot((snapShot) => {
         snapShot.docs.map((documents) => {

               const data = [documents.data()] as Array<array>;
               const exist = documents.exists;
               if (exist){
                // console.log(data, 'from event file');
             return  setEvents(data);
               } else {
             return  setEvents(null);
               }
                
            })
    })

}
}


export default Events;