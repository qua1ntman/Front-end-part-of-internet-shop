import {gql} from "@apollo/client"

const PRODUCT_INFO_CURRENCIES = gql`
    {
        currencies
    }`

// const PRODUCT_INFO_IDS_FUNC = (item) => {
//     return (gql`
//         {
//             category (input: {title: "${item}"}){
//                 name
//                 products {
//                     id
//                     name
//                 }
//             }
//         }`
//     )
// }

const PRODUCT_INFO_CATEGORIES = gql`
    {
        categories {
            name
            products{
                id
                name
                inStock
                gallery
                description
                category
                attributes{
                    name
                    items{
                    displayValue
                    value
                    }
                }
                prices{
                  currency
                  amount
                }
                brand
            }

        }
    }`


// let PRODUCT_INFO_EACH_BASE = (item) => {
//
//     return (gql`{
//         product (id: "${item}") {
//             id
//             name
//             brand
//             prices {
//                 currency
//                 amount
//             }
//             inStock
//             attributes{
//                 name
//                 items {
//                     displayValue
//                     value
//                 }
//             }
//             gallery
//             category
//             description
//             }
//     }`)
//
// }

// let PRODUCT_PLP_DATA = (item) => {
//
//     return (gql`{
//         product (id: "${item}") {
//             name
//             brand
//             prices {
//                 currency
//                 amount
//             }
//             inStock
//             gallery
//             }
//     }`)
//
// }

// let PRODUCT_PLP_DATA_ATTRIBUTES = (item) => {
//
//     return (gql`{
//         product (id: "${item}") {
//             attributes{
//                 name
//                 items {
//                     displayValue
//                     value
//                 }
//             }
//             category
//         }
//     }`)
// }

export {
    PRODUCT_INFO_CURRENCIES,
    PRODUCT_INFO_CATEGORIES,
    // PRODUCT_PLP_DATA,
    // PRODUCT_PLP_DATA_ATTRIBUTES,
    // PRODUCT_INFO_IDS_FUNC,
    // PRODUCT_INFO_EACH_BASE
}