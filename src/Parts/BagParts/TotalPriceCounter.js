import React from "react";
import './Bag.css'
import PriceDiv from "./PriceDiv";

class TotalPriceCounter extends React.Component {

    render() {




        if (this.props.currencyProd === '€') {
            let sumArr=[0]
            let sum = 0

            this.props.chosenItems.map((item) => item.prices
                .filter(({currency}) => currency === 'USD')
                .map(({name, amount}) => sumArr.push(amount / 1.205736 * item.counter)))

            sumArr.forEach(el => sum += Number(el))

            return (
                <PriceDiv
                    currency={this.props.currencyProd}
                    cost={sum.toFixed(2)}
                />
            )
        }
    
    
    else {
            let sumArr=[0]
            let sum = 0

            this.props.chosenItems.map((item) => item.prices
                .filter(({currency}) => currency === this.props.currencyName)
                .map(({name, amount}) => sumArr.push(amount* item.counter)))

            sumArr.forEach(el => sum += Number(el))

        return <PriceDiv
                    currency={this.props.currencyProd}
                    cost={sum.toFixed(2)}
               />
        }
    }
}

export default TotalPriceCounter