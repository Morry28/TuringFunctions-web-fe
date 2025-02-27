import React, { useEffect, useState } from "react"
import { signInWithGoogle } from "../../firebase"
import { userCredit } from "../../firebase"
declare global {
    interface Window {
      isLoggedIn?: boolean;
    }
  }
  
interface User {
    displayName: string | null
    email: string | null
    photoURL: string | null
    uid: string
    credit?: number | null
}

export default function Header() {
    const [user, setUser] = useState<User | null>(null)
    const [credits, setCredits] = useState<number | null>(null)
    const [loading,setLoading] = useState<boolean>(false)

    const handleLoggin = async () => {
        setLoading(true)
        try {
            const result = await signInWithGoogle()
            const loggedUser = result.user
            const extractedUser: User = {
                displayName: loggedUser.displayName,
                email: loggedUser.email,
                photoURL: loggedUser.photoURL,
                uid: loggedUser.uid,
            }

            const response = await userCredit(extractedUser.email!, extractedUser.uid)

            console.log(response)
            extractedUser.credit = response;

            setCredits(response)
            setUser(extractedUser)
            window.isLoggedIn = true
            console.log('success', extractedUser)
        } catch (error) {
            console.error('Chyba pri prihlásení:', error)
        }
        setLoading(false)
    }
    useEffect(() => { console.log(credits) }, [credits])
    return (
        <div>
            <div className="w-full flex bg-PMS justify-between">
                <div className="flex items-center gap-4 p-4">
                    <p className="text-lg">🥜</p>
                    <p className="text-lg font-black text-SCS">Peanuts</p>
                </div>
                <div className="p-4">
                    {user?.displayName ? (
                        <div className="flex items-center gap-4">
                            <button  className="px-4 py-2 bg-ACS rounded-full hover:bg-AC font-bold text-PM flex items-center gap-2">
                                <p className="font-bold ">{`${credits}`} ⚡</p>
                            </button>
                            <button className=" relative px-4 py-2 bg-ACS rounded-full hover:bg-AC font-bold text-PM flex items-center gap-2">
                                <p>{user?.displayName ?? "err"}</p>
                                <span className="w-5"/>
                                <div className="size-8 absolute right-1 rounded-full bg-AC flex items-center justify-center">
                                    <p>🐡</p>
                                </div>
                            </button>
                        </div>
                    ) : (
                        <button
                            className="flex items-center gap-4 px-4 py-2 bg-ACS rounded-lg hover:bg-AC font-bold text-PM"
                            onClick={() => handleLoggin()}
                        >
                            {loading? <img src="/loading.svg" className="size-4 my-1"/>:'Start Here'}
                            
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}