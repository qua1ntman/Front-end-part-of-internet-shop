import React from 'react'
import './Bag.css'
import ChosenAttributeValue from "./ChosenAttributeValueBlock";


class ChosenAttribute extends React.Component {


    render() {

        return (
            <div className='Attribute-bag'>
                <div className='Attribute-name-bag'>{this.props.name}: </div>
                <ChosenAttributeValue
                    name={this.props.name}
                    value={this.props.value}
                />
            </div>
        )
    }
}


export default ChosenAttribute