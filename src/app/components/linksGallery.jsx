'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//images
import collarPortada from '../../assets/joyas/collares/collares-portada-2.jpg';
import anilloPortada from '../../assets/joyas/anillos/anillos-portada2.jpg';
import pulseraPortada from '../../assets/joyas/pulseras/pulseras-portada.jpg';
import arosPortada from '../../assets/joyas/aros/aros-portada.jpg';
import conjuntoPortada from '../../assets/joyas/conjuntos/conjunto-portada.jpg';

//styles
import '../../styles/linksgallery.scss'
import Image from 'next/image';

const LinksGallery = () => {

    return (
        <section>
            <div className='cards-gallery'>
                <Card className='card' sx={{ maxWidth: 300, minWidth: 100 }}>
                    <CardActionArea >
                        <Image 
                            component="img"
                            height="450"
                            src={collarPortada}
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
                <Card className='card' sx={{ maxWidth: 300, minWidth: 100 }}>
                    <CardActionArea>
                        <Image
                            component="img"
                            height="450"
                            src={anilloPortada}
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
                    <Card className='card' sx={{ maxWidth: 300, minWidth: 100 }}>
                        <CardActionArea>
                            <Image
                                
                                component="img"
                                height="450"
                                src={pulseraPortada}
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
                    
                <Card className='card' sx={{ maxWidth: 300, minWidth: 100 }}>
                    <CardActionArea>
                        <Image
                            component="img"
                            height="450"
                            src={arosPortada}
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
                <Card className='card' sx={{ maxWidth: 300, minWidth: 100 }}>
                    <CardActionArea>
                        <Image
                            component="img"
                            height="450"
                            src={conjuntoPortada}
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

