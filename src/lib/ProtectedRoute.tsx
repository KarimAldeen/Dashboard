'use client'
import React, { useEffect } from 'react';
import isLogin from '../Hooks/Auth/IsLogin';
import { useRouter } from 'next/navigation';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();

     useEffect(() => {
        isLogin()  
        .then(result => {
          router.replace('/');
        })
        .catch(error => {
          router.replace('/auth');
  
        });
     }, [])
     
    return <>{children}</>;
}

export default ProtectedRoute;
