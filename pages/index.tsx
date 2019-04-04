import Layout from '../components/Layout';
import FacebookButton from '../components/FacebookButton';


export default () => {

    const handleAuth = user => {
        console.log({ user });
    };

    return (
        <Layout>
            <FacebookButton onAuth={handleAuth} />
        </Layout>
    );
}