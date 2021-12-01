import React from 'react';
import './Product.css'
import Product from "./Products";






class ProductList extends React.Component {

    render() {
        return (
            this.props.products.map((product) => (
                            <Product key='Product'
                                     gallery={product.gallery}
                                     name={product.name}
                                     prices={product.prices}
                                     currencyName={this.props.currencyName}
                                     handleThingData={this.props.handleThingData}
                                     productQuery={product}
                                     brand={product.brand}
                                     handleWindowChange={this.props.handleWindowChange}
                                     chosenItemsDetailsContainer={this.props.chosenItemsDetailsContainer}
                            />
            ))
        )
    }
}

export default ProductList;