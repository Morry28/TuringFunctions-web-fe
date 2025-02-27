import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, initializeFirestore, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaTUgsoT58ct5SsGah8SG7Wb_lqUSWALM",
  authDomain: "flu-ai.firebaseapp.com",
  projectId: "flu-ai",
  storageBucket: "flu-ai.firebasestorage.app",
  messagingSenderId: "680132870469",
  appId: "1:680132870469:web:05267a8ace7ca3245f7e2c",
  measurementId: "G-F9NPS96G1M",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => signInWithPopup(auth, provider)

export async function userCredit(email: string, uid: string): Promise<number> {
  const startingCredits = 3
  const userDocRef = doc(db, "users", uid);
  console.log(userDocRef)
  console.log('test start')

  const userDocSnap = await getDoc(userDocRef);
  console.log(userDocSnap)
  console.log('test end')

  if (!userDocSnap.exists()) {
    await setDoc(userDocRef, { email, credits: startingCredits });
    return startingCredits
  } else {
    const data = userDocSnap.data();
    return data.credits
  }
}

