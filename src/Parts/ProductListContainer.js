import React from "react";
import {Query} from "@apollo/client/react/components";
import {PRODUCT_INFO_CATEGORIES} from "../Queries";
import ProductList from "./ProductParts/ProductList";
import './ProductParts/Product.css'


class ProductListContainer extends React.Component {

    render() {
        if (this.props.whatListActive === 'products') {
            return (
                <Query query={PRODUCT_INFO_CATEGORIES}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        return ( data.categories.map((item) =>
                            item.name === this.props.categoryActive ?
                                <div className='Up-product-container'>
                                    <div className="Title">{item.name[0].toUpperCase() + item.name.slice(1)}</div>
                                    <div className='Product-container'>
                                        <ProductList
                                            currencyName={this.props.currencyName}
                                            handleThingData={this.props.handleThingData}
                                            products={item.products}
                                            handleWindowChange={this.props.handleWindowChange}
                                            chosenItemsDetailsContainer={this.props.chosenItemsDetailsContainer}
                                        />
                                    </div>
                                </div>
                                : null
                        )
                        )}}
                </Query>
            )
        }
        return <div></div>
    }
}

export default ProductListContainer