import Image from "next/image";
import { ringsList } from "./ringsList";

//style
import '../../../styles/product.scss'

const RingsProductsList = () => {

    const products = ringsList;

    return (
        <div className="product-gallery">
            <ul className="rings">
                {
                    products.map(product => (
                        <li className="ring-element" key={product.id}>
                            <Image
                                src={product.imgDir}
                                alt={product.name}
                                width={200}
                            />
                            <h3 className="name">{product.name}</h3>
                            <p className="description">{product.description}</p>
                            <p className="price">Precio: $ {product.price}</p>
                            <button className="add">Añadir al carrito</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default RingsProductsList;
