import { useState, useEffect } from 'react';
import { User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/integrations/firebase/config';
import { userRoleService, profileService } from '@/integrations/firebase/services';
import { useToast } from '@/hooks/use-toast';

export type UserRole = 'admin' | 'user';

interface AuthState {
  user: User | null;
  role: UserRole | null;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    role: null,
    loading: true,
  });
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthState(prev => ({ ...prev, user }));

      if (user) {
        try {
          const adminUserId = import.meta.env.VITE_ADMIN_USER_ID;
          if (adminUserId && user.uid === adminUserId) {
            setAuthState(prev => ({ ...prev, role: 'admin', loading: false }));
            return;
          }

          const roleData = await userRoleService.getByUserId(user.uid);
          setAuthState(prev => ({ ...prev, role: roleData?.role ?? 'user', loading: false }));
        } catch (error) {
          console.error('Error fetching user role:', error);
          setAuthState(prev => ({ ...prev, role: 'user', loading: false }));
        }
      } else {
        setAuthState(prev => ({ ...prev, role: null, loading: false }));
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        // --- THIS IS THE FINAL FIX ---
        // We remove the user.uid entirely. The service will get the ID automatically.
        await profileService.create({
          display_name: displayName,
        });

        await userRoleService.create({
          user_id: user.uid,
          role: 'user',
        });
      }

      toast({
        title: "Account created successfully",
        description: "Welcome to the platform!",
      });

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signed in successfully",
        description: "Welcome back!",
      });
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast({
        title: "Signed out successfully",
        description: "See you next time!",
      });
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }
  };

  return {
    ...authState,
    signUp,
    signIn,
    signOut,
    isAdmin: authState.role === 'admin',
  };
};