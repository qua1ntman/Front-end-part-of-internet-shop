import React from "react";
import '../ProductParts/Product.css'

class PriceDiv extends React.Component {

    render() {
        return (
            <div
                className={this.props.counter || this.props.counter === 0 ? 'Price-of-chosen-thing-block-bag' : 'Price'}>
                {this.props.currency}{this.props.cost}
            </div>
        )
    }
}

export default PriceDiv