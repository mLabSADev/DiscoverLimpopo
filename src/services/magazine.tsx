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

onLikePress: async ( isChecked: string, magazineId: string, likes: number) => {
const user = auth()?.currentUser?.uid;
console.log(magazineId, 'check whether is undefined', likes, "check whether the number is provided")
    if (isChecked !== "") {
        
        (await firestore().collection('magazines').where("magazineId", "==", magazineId).get()).docs.map((snapShot) => {
            // console.log(snapShot.exists, "doc ")
            if (snapShot.exists) {
                snapShot.ref.update({
                    like: likes,
                }).then(() => {
                    // console.log("document is now updated")
                }).catch((error) => {
                    // console.log(error, 'error when liking')
                })
            } else {
                // console.log("doc does not exist")
            }
        });
        await Magazines.updateOnlikePress(isChecked, magazineId, likes);

    } else {
        (await firestore().collection('magazines').where("magazineId", "==", magazineId).get()).docs.map((snapShot) => {
            if (snapShot.exists) {
                snapShot.ref.update({
                    like: likes,
                }).then(() => {
                    // console.log("document is now updated")
                }).catch((error) => {
                    // console.log(error, 'error when disliking')
                })
            } else {
                // console.log("doc does not exist")
            }
        });
        await Magazines.updateDisLikePress('',magazineId, likes);

    }
  
},

updateOnlikePress : async (isChecked: string, magazineId: string, likes: number) => {
    const user = auth()?.currentUser?.uid;
    return (await firestore().collection('magazines').where("magazineId", "==", magazineId).get())
    .docs.map((doc) => {
    doc.ref.collection('likes').doc(user).set({
        magazineId: magazineId,
        uid: user,
    }).then(() => {})
    .catch((error) => {
        // console.log(error, "error when clicking like on tsx")
    });
    
    })
},

updateDisLikePress: async (isChecked: string, magazineId: string, likes: number) => {
    const user = auth()?.currentUser?.uid;
    return (await firestore().collection('magazines').where("magazineId", "==", magazineId).get())
    .docs.map((doc) => {
        doc.ref.collection('likes').doc(user).set({
            magazineId: "",
            uid: user,
        }).then(() => {})
        .catch((error) => {
            // console.log(error, "error when clicking like on tsx")
        });
        
        })
},

getLikes: async (magazineId: string, setLike: (isUser : string) => void) => {
    const user =  auth()?.currentUser?.uid;

    const likes = firestore().collection('magazines').where("magazineId", '==', magazineId).get();
    likes.then((querySnap) => {
        querySnap.docs.map((document) => {
            document.ref.collection('likes').where("uid", "==", user).get().then((snapShot) => {
                    snapShot.docs.map((doc) => {
                        // console.log(doc.exists, "check if exist")
                        if(doc.exists && doc.data().magazineId !== "") {
                            const data = document.data().magazineId;
                           setLike(document.data().magazineId)
                        } else {
                         setLike('');
                        }
                    })
            }).catch((error) => {
                // console.log(error, "error in getting like, check tsx");
            })
                
        })
    })

},


}

export default Magazines;
