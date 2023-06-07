import Link from 'next/link';
import Image from 'next/image';

//styles
import styles from './Navigation.module.css';

//Imagen Logo
import SD_Logo from '../../assets/header/ds-logo.png';
import LoginButton from './LoginButton';
import SingUpButton from './SingUpButton';

const links = [
    {
    label: 'Inicio',
    route: '/'
    }, 
    {
    label: 'Galería',
    route: '/gallery'
    },
    {
    label: 'Quienes Somos',
    route: '/about'
    }
]

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navigation}>
                        <Link href='/'>
                            <Image 
                            src={SD_Logo}
                            width={60}
                            height={60}
                            alt= 'Logo'
                            quality={100}
                            style={{borderRadius:'100%', marginLeft:'1rem'}}
                            /> 
                        </Link>

                    {links.map(({label, route}) => (
                        <li key={route} >
                        <Link href={route}>{label}</Link>
                        </li>
                    ))}

                        <li className={styles.botones}>
                            <div className={styles.botones}>
                                <LoginButton />
                            </div>
                            <div>
                                <SingUpButton/>
                            </div>
                        </li>


                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
