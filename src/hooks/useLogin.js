import { useEffect, useState } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export function useLogin() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign the user out of firebase
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // update user status in firestore
      await projectFirestore.collection('users').doc(res.user.uid).update({
        online: true,
      });

      // dispatch logout action
      dispatch({ type: 'LOGIN', payload: res.user });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setIsPending(false);
        setError(error.message);
        console.log(error);
      }
    }
  };
  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);
  return { login, error, isPending };
}
