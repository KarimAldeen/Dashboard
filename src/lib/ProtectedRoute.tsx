'use client'
import React, { useEffect } from 'react';
import useLogin from '@/Hooks/useLogin';
import { redirect } from 'next/navigation';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const isLogin = useLogin();
    useEffect(() => {
        if (!isLogin) {
            redirect('/auth');
        }
    }, [isLogin]);

    return <>{isLogin && children}</>;
}

export default ProtectedRoute;
