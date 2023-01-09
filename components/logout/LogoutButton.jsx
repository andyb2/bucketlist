'use client';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/config';
import Cookies from 'js-cookie';

const LogoutButton = () => {
    const router = useRouter();

    const logout = async () => {
        try {
            await signOut(auth);
            router.push('/');
            Cookies.remove('uid');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default LogoutButton;
