import {gql} from "@apollo/client"

const PRODUCT_INFO_CURRENCIES = gql`
    {
        currencies
    }`

const PRODUCT_INFO_IDS_FUNC = (item) => {
    return (gql`
        {
            category (input: {title: "${item}"}){
                name
                products {
                    id
                    name
                }
            }
        }`
    )
}

const PRODUCT_INFO_CATEGORIES = gql`
    {
        categories {
            name

        }
    }`

// products {
//     name
// }

let PRODUCT_INFO_EACH_BASE = (item) => {

    return (gql`{
        product (id: "${item}") {
            name
            brand
            prices {
                currency
                amount
            }
            inStock
            attributes{
                name
                items {
                    displayValue
                    value
                }
            }
            gallery
            category
            description
            }
    }`)

}


export {
    PRODUCT_INFO_CURRENCIES,
    PRODUCT_INFO_CATEGORIES,
    PRODUCT_INFO_IDS_FUNC,
    PRODUCT_INFO_EACH_BASE}