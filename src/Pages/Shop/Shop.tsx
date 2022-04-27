import {ShopContent} from "./Shop.style";


interface productList {
    name: string,
    id: string,
    price: number
    url: string
}


export const Shop = (): JSX.Element => {

    const product_list: productList[] = [
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


    return <ShopContent>Shop</ShopContent>
}
