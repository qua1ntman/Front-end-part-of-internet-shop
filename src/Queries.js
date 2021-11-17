import {gql} from "@apollo/client"

const PRODUCT_INFO_IDs = gql`
    {
        categories {
            name
            products {
                name
                id
            }
        }
    }`

let PRODUCT_INFO_EACH_BASE = function (item) {

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
    PRODUCT_INFO_IDs,
    PRODUCT_INFO_EACH_BASE}