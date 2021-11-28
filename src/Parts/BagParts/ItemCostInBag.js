import React from "react";
import PriceDiv from "./PriceDiv";

class ItemCostInBag extends React.Component  {


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

export default ItemCostInBag