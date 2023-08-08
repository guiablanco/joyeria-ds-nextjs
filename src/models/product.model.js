const Product = {
    id: "",
    name: "",
    description: "",
    imgDir: "",
    price: 0,
}

export function constructorProduct(id, name, description, imgDir, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imgDir = imgDir;
    this.price = price;
}
