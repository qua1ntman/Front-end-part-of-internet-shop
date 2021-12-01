import React from "react";
import './Product.css'
import PriceDiv from "../BagParts/PriceDiv";


class ProductPic extends React.Component {


    render(){
        return (
            <div className='Clothes-pic' >
                <img className='Pic-size' alt="img" src={this.props.gallery[0]}/>
            </div>
        )
    }
}


class ProductName extends React.Component {


    render() {
        return (
            <div className='Title-prod'>
                {this.props.brand} {this.props.name}
            </div>
        )
    }
}



class ProductCost extends React.Component  {

    render() {
            return (
                <PriceDiv
                        cost={new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: this.props.currencyName,

                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(this.props.prices.filter(({currency}) => currency === this.props.currencyName)
                            .map(({amount}) => amount ))}
                    />
                )
        }

}

export {ProductPic, ProductName, ProductCost, }