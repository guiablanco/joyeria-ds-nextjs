import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//images
import collarPortada from '../../assets/joyas/collares/collares-portada-2.jpg';
import anilloPortada from '../../assets/joyas/anillos/anillos-portada.jpg';
import pulseraPortada from '../../assets/joyas/pulseras/pulseras-portada.jpg';
import arosPortada from '../../assets/joyas/aros/aros-portada.jpg';
import conjuntoPortada from '../../assets/joyas/conjuntos/conjunto-portada.jpg';

//styles
import '../../styles/linksgallery.scss'

const LinksGallery = () => {

    const navigate = useNavigate();

    return (
        <section>
            <div className='cards-gallery'>
                <Card onClick={()=>navigate('/collares')} className='card' sx={{ maxWidth: 400, minWidth: 300 }}>
                    <CardActionArea >
                        <CardMedia 
                            component="img"
                            height="450"
                            image={collarPortada}
                            alt="Collares Portada"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Collares
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Los diferentes modelos de collares permitirán que tu cuello se vea estilizado y hermosamente decorado dándole la elgancia que tú necesitas.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card onClick={() => {navigate('/anillos')}} className='card' sx={{ maxWidth: 400, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="450"
                            image={anilloPortada}
                            alt="Anillos Portada"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Anillos
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tenemos anillos con tantos diseños como podrías querer, para que tus manos muestren la belleza de la plata, que resaltará las formas de tus manos y dedos.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                </div>
                <div className='cards-gallery'>
                    <Card onClick={() => {navigate('/pulseras')}} className='card' sx={{ maxWidth: 400, minWidth: 250 }}>
                        <CardActionArea>
                            <CardMedia
                                
                                component="img"
                                height="450"
                                image={pulseraPortada}
                                alt="Pulseras Portada"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pulseras
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nuestras pulseras elevarán la elegancia de tus manos, dándole una belleza liviana que llamará la atención de cualquiera que las vea.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    
                <Card onClick={() => {navigate('/aros')}} className='card' sx={{ maxWidth: 400, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="450"
                            image={arosPortada}
                            alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Aros
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Haz resaltar la hermosura de tus orejas con los aros de plata más hermosos y diversos que podrás encontrar.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card onClick={() => {navigate('/conjuntos')}} className='card' sx={{ maxWidth: 400, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="450"
                            image={conjuntoPortada}
                            alt="Conjuntos Portada"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Conjuntos
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Las mujeres entendemos la importancia de que los accesorios combinen. Por eso tenemos conjuntos que se lucirán y potenciarán su belleza y la tuya.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

        </section>
    );
}

export default LinksGallery;

