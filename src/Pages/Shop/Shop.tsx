import {ProductImage, ProductItem, ProductList, ProductName, ProductPrice, ShopContent} from "./Shop.style";
import {generatePath, useNavigate} from "react-router-dom";
import {Routing} from "../../services/Routing";


interface productItem {
    name: string,
    id: string,
    price: number
    url: string
}


export const Shop = (): JSX.Element => {

    const product_list: productItem[] = [
        {
            name: "Łóżko metalowe",
            id: "qwe1",
            price: 1200,
            url: 'no-img'
        },
        {
            name: "Łóżko premium",
            id: "qwe2",
            price: 14400,
            url: 'no-img'
        },
        {
            name: "Łóżko betonowe",
            id: "qwe3",
            price: 100,
            url: 'no-img'
        },
        {
            name: "Łóżko drewniane",
            id: "qwe4",
            price: 1600,
            url: 'no-img'
        },
    ]

    const navigator = useNavigate()

    return <ShopContent>
        <ProductList>
            {product_list.map((productItem) => (
                <ProductItem onClick={() => navigator(generatePath(Routing.product, {product: productItem.id}))}>
                    <ProductImage url={'./No-image-available.png'}/>
                    <ProductName> {productItem.name}</ProductName>
                    <ProductPrice>{productItem.price} PLN</ProductPrice>
                </ProductItem>
            ))}

        </ProductList>

    </ShopContent>
}
