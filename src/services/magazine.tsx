import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

type array = []

const Magazines = {

getMagazine: async (setMagazine: (magazines: any| null) => void) => {
    const snapchot = await firestore().collection('magazines').get();
    return new Promise <Event[]> (resolve => {
        const v = snapchot.docs.map(x => {
            const obj = x.data();
            obj.id = x.id;
            return obj as Event;
        });
        resolve(v);
        setMagazine([...v])
        // console.log({...v})
    });
},

onLikePress: async (magazineId: string, likes: number, setLike: (like: any | null) => void) => {
        const like = firestore().collection('magazines').doc(magazineId).get();
        like.then((snapShot) => {
                const withinSnap = snapShot.ref.collection("likes").where('uid', "==", auth()?.currentUser?.uid).get();
                withinSnap.then((doc2) => {
                    return new Promise <Event[]> (resolve => {
                        const v = doc2.docs.map(x => {
                            const obj = x.data().magazineId;
                            obj.id = x.id;
                            if (x.exists) {
                                if (magazineId === "") {
                                    snapShot.ref.update({
                                       like: likes + 1,
                                    })
                                    setLike(magazineId)
                                } else {
                                    snapShot.ref.update({
                                        like: likes - 1,
                                    })
                                    setLike('')
                                }
                             } else {
                                 x.ref.set({
                                    magazineId: magazineId,
                                    uid: auth()?.currentUser?.uid,
                                 }).then(() => {
                                    snapShot.ref.update({
                                        like: likes + 1,
                                     })           
                                     setLike(magazineId)        
                                 })
                             }
                            return obj as Event;
                        });
                        resolve(v);
                        // setMagazine([...v])
                        console.log({...v})
                    });
                })
            })
},


getLikes: async (magazineId: string, setLike: (isUser : string) => void) => {
    const like = firestore().collection('magazines').doc(magazineId).get();
    like.then((snapShot) => {
            const withinSnap = snapShot.ref.collection("likes").where('uid', "==", auth()?.currentUser?.uid).get();
            withinSnap.then((doc2) => {
                    doc2.docs.map(x => {
                        const obj = x.data();
                        obj.id = x.id;
                        if (x.exists) {
                           setLike(x.data().magazineId)

                        } else {
                            setLike('');
                        }
                        console.log(obj);
                    });
                    
                    // console.log({...v})
                });
            })

}
}

export default Magazines;
