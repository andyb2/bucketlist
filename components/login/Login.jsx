'use client';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../firebase/config';
import {
    fillFive,
    fillFour,
    fillOne,
    fillThree,
    fillTwo,
    googleFive,
    googleFour,
    googleOne,
    googleThree,
    googleTwo,
} from '../../logos/google';
import Cookies from 'js-cookie';
import loginStyles from './Login.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const router = useRouter();

    const signIn = async () => {
        try {
            const {
                user: { uid },
            } = await signInWithPopup(auth, provider);
            Cookies.set('uid', uid);
            router.push('/dashboard');
        } catch (error) {
            console.log(`[SIGN IN]:`, error);
        }
    };

    return (
        <div className={loginStyles.container}>
            <div className={loginStyles.login}>
                <h4>BucketList</h4>
                <button onClick={() => signIn()}>
                    <svg
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='18px'
                        height='18px'
                        viewBox='0 0 48 48'
                        className='abcRioButtonSvg'
                    >
                        <g>
                            <path fill={fillOne} d={googleOne}></path>
                            <path fill={fillTwo} d={googleTwo}></path>
                            <path fill={fillThree} d={googleThree}></path>
                            <path fill={fillFour} d={googleFour}></path>
                            <path fill={fillFive} d={googleFive}></path>
                        </g>
                    </svg>
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
