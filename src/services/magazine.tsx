import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { useAuth } from "../context/auth.context";

type array = []

const Magazines = {

getMagazine: async (setMagazine: (magazines: Array<array> | null, size: number, uid: string) => void) => {
   
    const user = auth()?.currentUser;
   
    const magazineCollection = firestore().collection('magazines');
    return magazineCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                const data = [documents.data()] as Array<array>;
                const exist = documents.exists;

                documents.ref.collection('likes').where('magazineId', '==', documents.id).onSnapshot((snapS)  => {
                    const size = snapS.size;
                    snapS.docs.map((docs) => {
                        if (docs.exists) {
                            setMagazine(data, size, docs.id)
                        } else {
                            setMagazine(data, size, '')
                        }
                        //   console.log(docs.data().uid === user?.uid, 'yes they are the same')
                    })
                })
             })
     })
},

onLikePress: async (magazineId: string, name: string, uid: string) => {
    try {
       
      return firestore()
            .collection("magazines")
            .doc(magazineId)
            .collection("likes").where('uid', "==", uid).onSnapshot((snap) => {
                snap.docs.map((doc) => {
                    if(doc.exists === true || doc.data().magazineId === magazineId) {
                        doc.ref.update({
                            uid: uid,
                            name: name,
                            magazineId: ''
                        })
                    } else {
                        doc.ref.update({
                            uid: uid,
                            name: name,
                            magazineId: magazineId
                        })
                    }
                })
            })
           


        // return await firestore()
        //     .collection("magazines")
        //     .doc(magazineId)
        //     .collection("likes")
        //     .doc(uid)
        //     .set({
        //         uid: uid,
        //         name: name,
        //         magazineId: magazineId
        //     }).then(() => {
        //         console.log(uid, 'went to backend', magazineId)
        //     })
    } catch (error) { }
},

//  onDislikePress: async (magazineId: string, uid: string) => {
//     try {
//         return await firestore()
//              .collection("magazines")
//              .doc(magazineId)
//              .collection("likes")
//              .doc(uid)
//              .delete().then(() => {
//                 console.log(uid, 'now the button is dislike', magazineId)

//              })
//      } catch (error) { }
// },

onChangeLike: () => {
    const {user} = useAuth();
    const eventCollection = firestore().collection('magazines');
    return eventCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
                documents.ref.collection('likes').where('uid', '==', user?.uid).onSnapshot((snapS) => {
                    snapS.docs.map((docs) => {
                        if (docs.exists) {
                            documents.ref.collection('likes').doc(user?.uid).delete();
                        } else {
                            documents.ref.collection('likes').doc(user?.uid).set({
                                uid: user?.uid,
                                name: user?.name,
                            })
                        }
                        //   console.log(docs.data().uid === user?.uid, 'yes they are the same')
                    })
                })
                      
             })  
     })
},

getLikes: async (setLike: (isUser : string, size: number ) => void) => {
    const user = auth()?.currentUser;
    const eventCollection = firestore().collection('magazines');
    return eventCollection.onSnapshot((snapShot) => {
          snapShot.docs.map((documents) => {
              return  documents.ref.collection('likes').where('uid', '==', user?.uid).onSnapshot((snapS) => {
                    const size = snapS.size;
                    snapS.docs.map((docs) => {
                        if (docs.exists) {
                            const magazineId = docs.data().magazineId;
                            setLike(magazineId, size);
                        } else {
                            setLike('', size);
                        }
                        //   console.log(docs.data().uid === user?.uid, 'yes they are the same')
                    })
                })
                      
             })  
     })
}

}

export default Magazines;