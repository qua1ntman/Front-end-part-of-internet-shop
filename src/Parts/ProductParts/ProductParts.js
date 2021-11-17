import React from "react";
import './Product.css'
import PriceDiv from "../BagParts/PriceDiv";


class ProductPic extends React.Component {


    render(){
        return (
            <div className='Clothes-pic' >
                <img className='Pic-size' src={`${this.props.gallery[0]}`}/>
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
            if (this.props.currencyProd === '€') {
                let price = `${parseInt(
                    `${this.props.prices.filter(({currency}) => currency === 'USD')
                        .map(({amount}) => amount /= 1.205736)}`,10)
                    .toFixed(2)}`

                return (
                    <PriceDiv
                        currency={this.props.currencyProd}
                        cost={price}
                        numberOfUnits={this.props.numberOfUnits}
                    />
                )
            }


            return this.props.prices.filter(({currency}) => currency === this.props.currencyName)
                .map(({amount}) =>
                    <PriceDiv
                        currency={this.props.currencyProd}
                        cost={amount}
                        numberOfUnits={this.props.numberOfUnits}
                    />
                )
        }

}


// onChange={this.props.totalPriceChangeInItem() ? this.props.totalPriceChangeInItem(this.props.currencyProd, amount) : ''}

export {ProductPic, ProductName, ProductCost, }