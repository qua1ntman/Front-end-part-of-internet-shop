import React from "react";
import './Bag.css'
import TotalPriceCounter from "./TotalPriceCounter";

class TotalPrice extends React.Component {


    render() {
        return (
            <div className='Total-price'>
                <div className='Total-price-part'>
                    <strong>Total:</strong>
                </div>
                <div className='Total-price-part'>
                    <TotalPriceCounter
                        currencyName={this.props.currencyName}
                        chosenItems={this.props.chosenItems}
                    />
                </div>
            </div>
        )
    }
}

export default TotalPrice