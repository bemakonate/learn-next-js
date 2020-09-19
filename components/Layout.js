import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Head Title</title>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>

        </div>
    )

}

export default Layout;