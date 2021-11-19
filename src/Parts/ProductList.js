import React from 'react';
import './ProductParts/Product.css'
import Product from "./ProductParts/Products";
import {Query} from "@apollo/client/react/components";
import {
    PRODUCT_INFO_IDs,
    PRODUCT_INFO_EACH_BASE
} from "../Queries";



class ProductListContainer extends React.Component {

    render() {
        if (this.props.whatListActive === 'products' ) {
            return (

                <Query query={PRODUCT_INFO_IDs}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        return (data.categories.map(({name, products}) => {

                            if (name === this.props.categoryActive) return (

                                <div className='Up-product-container'>
                                    <div className="Title">{name[0].toUpperCase() + name.slice(1)}</div>
                                    <div className='Product-container'>
                                        <ProductList
                                            currency={this.props.currency}
                                            currencyName={this.props.currencyName}
                                            handleThingData={this.props.handleThingData}
                                            products={products}
                                            handleWindowChange={this.props.handleWindowChange}
                                        />
                                    </div>
                                </div>
                            )
                        }))
                    }}
                </Query>
            )
        }
        return <div></div>
    }
}



class ProductList extends React.Component {

    render() {
        return (

            this.props.products.map((product) => (
                <Query query={PRODUCT_INFO_EACH_BASE(product.id)}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        return (
                            <Product key='Product'
                                     gallery={data.product.gallery}
                                     name={data.product.name}
                                     prices={data.product.prices}
                                     currency={this.props.currency}
                                     currencyName={this.props.currencyName}
                                     handleThingData={this.props.handleThingData}
                                     productQuery={data.product}
                                     brand={data.product.brand}
                                     handleWindowChange={this.props.handleWindowChange}
                            />
                        )
                    }}
                </Query>
            ))
        )
    }
}

export default ProductListContainer;