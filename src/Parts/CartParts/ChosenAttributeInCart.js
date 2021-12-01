import React from 'react'
import './Cart.css'
import ChosenAttributeValue from "./ChosenAttributeValueBlockInCart";


class ChosenAttributeInCart extends React.Component {

    render() {
        return (
            <div className='Attribute'>
                <div className='Attribute-name'>{this.props.name}: </div>
                <ChosenAttributeValue
                    name={this.props.name}
                    value={this.props.value}
                />
            </div>
        )
    }
}


export default ChosenAttributeInCart