import { useNavigate } from 'react-router-dom';

//style
import '../../styles/header.scss';

//images
import SDlogo from '../../assets/header/ds-logo.png';

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className='header-element'>
            <div className='container'>
                
                    <div className='col-logo '>
                        <img onClick={() => {navigate('/')}} className='logo' src={SDlogo} alt='DS-Logo' />
                    </div>

                    <div className='col-links'>
                        <button onClick={() => {navigate('/')}} >Inicio</button>
                        <button>Galería</button>
                        <button onClick={() => {navigate('/about')}}>Acerca de</button>
                        <button onClick={() => {navigate('/contact')}}>Contáctanos</button>
                    </div>

                    <div className='col-button'>
                        <button onClick={() => {navigate('/login')}}>Accede</button>
                        <button onClick={() => {navigate('/sing-up')}}>Regístrate</button>
                    </div>

                
            </div>
        </header>
    );
}

export default Header;
