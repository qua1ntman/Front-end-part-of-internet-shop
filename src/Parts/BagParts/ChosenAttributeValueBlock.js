import React from 'react'
import './Bag.css'


class ChosenAttributeValue extends React.Component {

    render() {
        if (this.props.name === 'Color')
            return (<div id={this.props.value}
                         className='Attribute-value-bag'
                         style={{backgroundColor: this.props.value}}>
                    </div>)
        return (
            <div id={this.props.value}
                 className='Attribute-value-bag'>
                    <div className='Attribute-item-button-text-bag'>{this.props.value}</div>
            </div>)
    }

}

export default ChosenAttributeValue