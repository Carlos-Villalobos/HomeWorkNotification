import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgr7XLP1YTMddY-VsKF99J-AxyPlsHvr8",
  authDomain: "homeworknot-26cf3.firebaseapp.com",
  databaseURL: "https://homeworknot-26cf3.firebaseio.com",
  projectId: "homeworknot-26cf3",
  storageBucket: "homeworknot-26cf3.appspot.com",
  messagingSenderId: "24311093141",
  appId: "1:24311093141:web:c2eb1207bb69ef3147489c",
  measurementId: "G-measurement-id"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const getResource = resource => {
    return new Promise((resolve, reject) => {
        db.collection(resource)
            .get()
            .then( snapshots => {
                resolve(snapshots.docs.map(doc => {
                    return { _key: doc.id, ...doc.data()}
                }))
            })
            .catch(err => reject(err))
    })
}

export const deleteDocument = (resource, id) => {
    db.collection(resource)
    .doc(id)
    .delete()
    .then(() => resolve(true))
    .catch(err => reject(err))
}

export const addDocument = (resource, document) => {
    return new Promise((resolve, reject) => {
        db.collection(resource)
            .add(document)
            .then(docRef => {
                resolve(docRef.id)
            })
            .catch(err => reject(err))
    })
}
