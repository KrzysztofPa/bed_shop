import {BuyButton, ProductContent, ProductDescription, ProductImage, ProductLeft, ProductName, ProductPrice, ProductRight} from "./Product.style";
import {Content} from "../Global.style";


interface ProductData {
    id: string,
    name: string,
    url: string,
    description: string,
    price: number
}


export const Product = (): JSX.Element => {

    const productData: ProductData = {
        id: "qwe4",
        name: "Łóżko drewniane",
        url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5bb15688/images/1170000/1178752.jpg?sfrm=jpg',
        description: 'Łóżko drewniane marki damendware, niesamowicie wygodne i ciepłe',
        price: 1600
    }

    return <>
        <Content>
            <ProductContent>

                <ProductLeft>
                    <ProductImage src={productData.url}></ProductImage>

                </ProductLeft>
                <ProductRight>
                    <ProductName>{productData.name}</ProductName>

                    <ProductPrice>{productData.price} PLN/szt</ProductPrice>
                    <ProductDescription>{productData.description}</ProductDescription>
                    <BuyButton>ZAMÓW TERAZ </BuyButton>
                </ProductRight>


            </ProductContent>
        </Content>

    </>
}
