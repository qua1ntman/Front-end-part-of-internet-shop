import React from 'react'
import './Cart.css'


class ChosenAttributeValue extends React.Component {

    render() {
        if (this.props.name === 'Color')
            return (<div id={this.props.value}
                         className='Attribute-value Color-block-cart'
                         style={{backgroundColor: this.props.value}}>
                    </div>)
        return (
            <div id={this.props.value}
                 className='Attribute-value'>
                    <div className='Attribute-item-button'>{this.props.value}</div>
            </div>)
    }

}

export default ChosenAttributeValue