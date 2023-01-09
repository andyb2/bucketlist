import Login from '../components/login/Login';
import { initFirebaseAuth } from '../firebase/config';

const Home = () => {
    initFirebaseAuth();

    return (
        <div>
            <Login />
        </div>
    );
};

export default Home;
