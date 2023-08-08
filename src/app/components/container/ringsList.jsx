import { constructorProduct } from "@/models/product.model";

//images
import ring0 from '../../../assets/joyas/anillos/variedad0.jpg';
import ring1 from '../../../assets/joyas/anillos/variedad1.jpg';
import ring2 from '../../../assets/joyas/anillos/variedad2.jpg';
import ring3 from '../../../assets/joyas/anillos/variedad3.jpg';
import ring4 from '../../../assets/joyas/anillos/variedad4.jpg';
import ring5 from '../../../assets/joyas/anillos/variedad5.jpg';
import ring6 from '../../../assets/joyas/anillos/variedad6.jpg';
import ring7 from '../../../assets/joyas/anillos/variedad7.jpg';

const ringProduct0 = new constructorProduct(10000, "anillo variedad 0", "anillo de plata 925, es uno de los anillos variedad, con zircón brillante hexagonal.", ring0, 12900);
const ringProduct1 = new constructorProduct(10001, "anillo variedad 1", "anillo de plata 925, es uno de los anillos variedad, con adornos de infinito.", ring1, 12900);
const ringProduct2 = new constructorProduct(10002, "anillo variedad 2", "anillo de plata 925, es uno de los anillos variedad, con zircón brillante princesa.", ring2, 12900);
const ringProduct3 = new constructorProduct(10003, "anillo variedad 3", "anillo de plata 925, es uno de los anillos variedad, delicado y elegante, con zircón brillante princesa.", ring3, 12900);
const ringProduct4 = new constructorProduct(10004, "anillo variedad 4", "anillo de plata 925, es uno de los anillos variedad, con motivo de mariposas de cristales.", ring4, 10500);
const ringProduct5 = new constructorProduct(10005, "anillo variedad 5", "anillo de plata 925, es uno de los anillos variedad, con motivo de mariposas y flores.", ring5, 12900);
const ringProduct6 = new constructorProduct(10006, "anillo variedad 6", "anillo de plata 925, es uno de los anillos variedad, abierto y ajustable con cristales.", ring6, 12900);
const ringProduct7 = new constructorProduct(10007, "anillo variedad 7", "anillo de plata 925, es uno de los anillos variedad, con zircón brillante hexagonal y modelo delgado.", ring7, 12900);

export const ringsList = [
    ringProduct0,
    ringProduct1,
    ringProduct2,
    ringProduct3,
    ringProduct4,
    ringProduct5,
    ringProduct6,
    ringProduct7,
]
