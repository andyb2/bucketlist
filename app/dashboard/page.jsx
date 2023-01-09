'use client';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { createUser, findUser } from '../../airtable/utils';
import LogoutButton from '../../components/logout/LogoutButton';
import { auth } from '../../firebase/config';

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            const storedUid = Cookies.get('uid');

            if (!user || storedUid !== user.uid) {
                Cookies.remove('uid');
                router.push('/');
            }

            if (user) {
                const { uid, email } = user;
                const doesUserExist = await findUser(uid);
                const hasAirtableRecord = doesUserExist.users.length !== 0;

                if (!hasAirtableRecord) {
                    await createUser(uid, email);
                }
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            WELCOME TO DASHBOARD
            <LogoutButton />
        </div>
    );
};

export default Dashboard;
