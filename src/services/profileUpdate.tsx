import React from 'react';
import firestore from '@react-native-firebase/firestore';
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
 profileUpdate:async (users: Props) => {
    const usersCollection = firestore().collection('users');
    const user: User = {
      name: users.name,
      email: users.email,
      createdAt: users.createdAt,
      uid: users.uid,
      userName: users.userName,
      imageUrl: users.imageUrl,
      nationality: users.nationality,
      phoneNumber:users.phoneNumber,
      dateOfBirth:users.dateOfBirth,
    }
    await usersCollection.doc(users.obj.uid).update(user);
        Toast.show({ type: "success", text2: "Profile successfully updated" });
}

}

export default ProfileUpdate;