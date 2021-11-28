import React from "react";
import './Cart.css'

class PriceDivCart extends React.Component {

    render() {
        return (
            <div
                className='Price-of-chosen-thing-block'>
                {this.props.cost}
            </div>
        )
    }
}

export default PriceDivCart