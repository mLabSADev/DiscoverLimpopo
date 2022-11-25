import auth from "@react-native-firebase/auth";
import { User } from '../models/user';
import firestore from '@react-native-firebase/firestore';
import Toast  from "react-native-toast-message";


const AuthService = {
  

  signin: async (email: string, password: string) => {
    // const { user } = 
    await auth().signInWithEmailAndPassword(email, password).then( async (userCredetial) => {
      const user = userCredetial.user;
      const usersCollection = firestore().collection('users');
     usersCollection.doc(user.uid).onSnapshot((snapShot) => {
      const data = snapShot.data();
      return data as User;
    });
    }).catch((error) => {
      if(error.code === "auth/user-not-found"){
        Toast.show({type:'error', text2:"Email is not registered"});
      } if (error.code === "auth/wrong-password") {
        Toast.show({type:'error', text2:"Password is incorrect"});
      } else {
        console.log(error)
      }
    });
    
},

signup: async (name: string, email: string, password: string) => {
  return await auth().createUserWithEmailAndPassword(email, password).then((userCredetial) => {
    Toast.show({type:"success", text2:"You're now registered!"})
    const usersCollection = firestore().collection('users')

    const user: User = {
      name: name ? name : "name",
      email: email,
      createdAt: firestore.Timestamp.now(),
      uid: userCredetial.user?.uid,
      userName: 'display name',
      imageUrl: 'https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=i9-oulHCR0LCxqzqUW2Q7bKt3RrdbCZU0OXqXV2gw-o=',
      nationality:"South African",
      phoneNumber:"0123456789",
      dateOfBirth:"DD-MM-YYYY",
    }

    return usersCollection.doc(userCredetial.user.uid).set(user)

  }).catch((error) => {
    if(error.code === "auth/email-already-in-use"){
      Toast.show({type:'error', text2:"email address is already in use!"});
    } 
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }else {
      console.log(error)
    }
  });  
},


authState: (onStateChanged: (user: User | null) => void) => {
  return auth().onAuthStateChanged((currentUser) => {
    const user = currentUser;
      if (user) {
        const usersCollection = firestore().collection('users')

     return   usersCollection.doc(user.uid).get().then(result => {
            const data = result.data() as User;
            // console.log(data)
            onStateChanged(data)
        })
      } else {
          onStateChanged(null)
      }
      
  })
},
resetPassword: (email: string) => {
  return auth().sendPasswordResetEmail(email)
},
signOut: () => {
  return auth().signOut()
}

 
}

export default AuthService;
