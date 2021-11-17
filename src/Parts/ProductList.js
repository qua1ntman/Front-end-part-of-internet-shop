import React from 'react';
import './ProductParts/Product.css'
import Product from "./ProductParts/Products";
import {Query} from "@apollo/client/react/components";
import {
    PRODUCT_INFO_IDs,
    PRODUCT_INFO_EACH_BASE
} from "../Queries";



class ProductListContainer extends React.Component {

    handleThingData2(product){
        this.props.handleThingData3(product)
        console.log(product)

    }

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
    }

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
                                            // handleChangeChosenThing={this.handleChangeChosenThing1.bind(this)}
                                            handleThingData={this.handleThingData2.bind(this)}
                                            products={products}
                                            handleWindowChange={this.handleWindowChange}
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


    // handleChangeChosenThing(chosenProduct){
    //     this.props.handleChangeChosenThing(chosenProduct)
    // }

    handleThingData(product){
        this.props.handleThingData(product)
        console.log(product)

    }

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
    }

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
                                     // handleChangeChosenThing2={this.handleChangeChosenThing.bind(this)}
                                     handleThingData={this.handleThingData.bind(this)}
                                     productQuery={data.product}
                                     brand={data.product.brand}
                                     handleWindowChange={this.handleWindowChange}
                            />
                        )
                    }}
                </Query>
            ))
        )
    }
}

export default ProductListContainer;