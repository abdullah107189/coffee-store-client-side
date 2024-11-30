import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)

    const CreateUserUsingPassAndEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const photoAndNameUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logInUserUsingPassAndEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setUser,
        CreateUserUsingPassAndEmail,
        photoAndNameUpdate,
        userLogOut,
        logInUserUsingPassAndEmail,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;