
//styles
import LinksGallery from '../../components/pure/linksGallery';
import '../../styles/home-joyeria.scss';


const HomePage = () => {
    return (
        <article className='homepage'>
            <h1 className='home-title'>En Joyería DS encuentra las mejores joyas en plata</h1>

            <LinksGallery></LinksGallery>
        </article>
    );
}

export default HomePage;
