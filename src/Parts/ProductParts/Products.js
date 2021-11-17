import React from 'react';
import '../../App.css';
import { ProductCost, ProductName, ProductPic} from "./ProductParts";
import circleIcon from '../../items/Circle Icon.png'



class Product extends React.Component {

    descriptionWindow({product = this.props.productQuery,}) {
        this.props.handleThingData(product)
    }


    render() {
        return (
            <div className='Product-item'>
                <OutOfStock productQuery={this.props.productQuery}/>
                <div className='Product-block'
                     onClick={() => this.props.handleWindowChange('description')
                     }>
                    <div className="Product-card" onClick={this.descriptionWindow.bind(this)}>
                        <div className='Content'>

                            <ProductName name={this.props.name}
                                         brand={this.props.brand}
                            />
                            <ProductCost currencyProd={this.props.currency}
                                         currencyName={this.props.currencyName}
                                         prices={this.props.prices}
                            />

                        </div>
                        <div className='Spacer-prod'/>
                        <ProductPic gallery={this.props.gallery}/>
                        <div className='Green-icon'>
                            <img src={circleIcon} width='56px' height='56px'/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


class OutOfStock extends React.Component {

    render() {
        if ( this.props.productQuery.inStock )
            return (
            <div className='Out-of-stock-active'>
                <div className='Out-of-stock-text'>OUT OF STOCK</div>
            </div>
        )
        return <div></div>


    }
}


export default Product