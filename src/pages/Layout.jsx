import {Outlet} from 'react-router-dom';
import Header from '../components/pure/header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
}

export default Layout;
