import { use } from 'react';
import { auth, storage, functions } from '../../firebase'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { httpsCallable } from 'firebase/functions';

export const uploadFile = async (file: File) => {
  try {
    const user = auth.currentUser
    const idToken = user ? await user.getIdToken() : null;
    const response = await fetch(`https://api-26rxwsybga-uc.a.run.app/api/webturingmodels/save?file_name=${encodeURIComponent(file.name)}`, {
      method: "POST",
      headers: {
        "Content-Type": file.type || "application/octet-stream",
        "Authorization": `Bearer ${idToken}`
      },
      body: await file.arrayBuffer()
    });
    const result = await response.json();
    console.log('Súbor bol úspešne nahratý:', result);
  } catch (error) {
    console.error('Chyba pri nahrávaní súboru:', error);
  }
};

export const testConection = async () => {
      console.log('✅ Starting connection test...✅');

      const testConnection = await fetch('https://api-26rxwsybga-uc.a.run.app/api/turingmodels')
      const response = await testConnection.json()
      console.log('response came succesfully', response)

      return response
  };
  




export const saveFile = async (file: File) => {
  try {
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
    console.log('Súbor úspešne nahratý');
    return file.name;
  } catch (error) {
    console.error('Chyba pri nahrávaní súboru:', error);
    return null;
  }
};
