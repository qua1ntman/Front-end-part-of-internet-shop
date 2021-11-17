import React from "react";
import PriceDiv from "./PriceDiv";

class ItemCostInBag extends React.Component  {


    render() {
            if  (this.props.currencyProd === '€') {
                let price = `${(parseInt(
                    `${this.props.prices.filter(({currency}) => currency === 'USD')
                        .map(({amount}) => amount /= 1.205736)}`,10)
                    * this.props.counter).toFixed(2)}`
                return (
                    <PriceDiv
                        currency={this.props.currencyProd}
                        cost={price}
                        counter={this.props.counter}
                    />
                )
            }
        let price = this.props.prices.filter(({currency}) => currency === this.props.currencyName)
            .map(({amount}) => amount)
            return <PriceDiv
                        currency={this.props.currencyProd}
                        cost={price * this.props.counter}
                        counter={this.props.counter}
                    />
    }
}

export default ItemCostInBag