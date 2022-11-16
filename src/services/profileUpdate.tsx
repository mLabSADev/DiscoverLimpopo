import React from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import auth from '@react-native-firebase/auth';

import { User } from '../models/user';
import  Toast  from 'react-native-toast-message';

type Props = {
    obj: User;
    name: string,
    email: string,
    createdAt: Date;
    uid:string,
    userName: string,
    nationality: string,
    phoneNumber:string,
    dateOfBirth:string,
    imageUrl: string,

}

const ProfileUpdate = {
 profileUpdate:async (users: Props, userId: string) => {
    const usersCollection = firestore().collection('users');
  return await usersCollection.doc(userId).update(users).then(() => {
      Toast.show({ type: "success", text2: "Profile successfully updated" });
    }).catch((error) => {
        console.log(error, 'error from service')
    });
      
},

updateImage: (imageName: string, uploadUri: string) => {    
  try {
    const user = auth()?.currentUser;
    storage().ref(imageName).putFile(uploadUri)
    .then((snapshot) => {
      //You can check the image is now uploaded in the storage bucket
      // console.log(`${imageName} has been successfully uploaded.`);
      storage().ref('/' + imageName).getDownloadURL().then((imageURL) => {
        // console.log(`${imageURL} has been retrieved.`);
      firestore().collection('users').doc(user?.uid).update({
        imageUrl: imageURL
      }). then(() => {
      }).catch((error) => {
        console.log(error, 'Could not upload the image, check what happened');
      })
        // setImage(imageURL);
      }).catch((e) => console.log('retrieving image error => ', e));
       
    })
    .catch((e) => console.log('uploading image error => ', e));
  
  }
  catch(e) {
    console.error(e);
  }
}

}

export default ProfileUpdate;