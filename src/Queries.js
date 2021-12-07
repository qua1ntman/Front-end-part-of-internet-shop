import {gql} from "@apollo/client"

const PRODUCT_INFO_CURRENCIES = gql`
    {
        currencies
    }`


const PRODUCT_CATEGORIES = gql`
    {
        categories {
            name
        }
    }`

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



export {
    PRODUCT_INFO_CURRENCIES,
    PRODUCT_INFO_CATEGORIES,
    PRODUCT_CATEGORIES
}