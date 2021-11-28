import React from "react";
import './Bag.css'
import PriceDiv from "./PriceDiv";

class TotalPriceCounter extends React.Component {

    render() {
        let sumArr=[0]
        let sum = 0

        this.props.chosenItems.map((item) => item.prices
            .filter(({currency}) => currency === this.props.currencyName)
            .map(({name, amount}) => sumArr.push(amount* item.counter)))

        sumArr.forEach(el => sum += Number(el))

        return (

            <PriceDiv
                cost={new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: this.props.currencyName,

                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).format(sum)}
            />
        )
    }
}

export default TotalPriceCounter