import { collection, doc } from 'firebase/firestore';
import { db } from '../config';

export const generateFirebaseId = (path: string) => {
  const docRef = doc(collection(db, path));
  return docRef.id;
};

