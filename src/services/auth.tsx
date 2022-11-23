import auth from "@react-native-firebase/auth";
import { User } from '../models/user';
import firestore from '@react-native-firebase/firestore';
import Toast  from "react-native-toast-message";


const AuthService = {
  

  signin: async (email: string, password: string) => {
    // const { user } = 
    await auth().signInWithEmailAndPassword(email, password).then( async (userCredetial) => {
      // Toast.show({type:"success", text2:"You're now logged in!"})
      const user = userCredetial.user;
      const usersCollection = firestore().collection('users');
     usersCollection.doc(user.uid).onSnapshot((snapShot) => {
      const data = snapShot.data();
      return data as User;
    });
        // navigation.navigate('Home', {user: user.uid});
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
    // Toast.show({type:"success", text2:"You're now logged in!"})
    const usersCollection = firestore().collection('users')

    const user: User = {
      name: name,
      email: email,
      createdAt: firestore.Timestamp.now(),
      uid: "",
      userName: "",
      imageUrl: "",
      nationality:"",
      phoneNumber:"",
      dateOfBirth:"",
    }

    return usersCollection.doc(userCredetial.user.uid).set(user)

      // navigation.navigate('Home', {user: user.uid});
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
