import React from 'react';
import './Product.css'


class AttributesInPLP extends React.Component {


    toggleClass = () => {

        if (!this.props.choseAttributes) {
            this.props.SelectAttribute(this.props.value)
            this.props.SelectAttributeInBag(this.props.name, this.props.value)
            setTimeout(() => console.log(`${this.props.choseAttributes}`), 200)

        } else if (this.props.choseAttributes) {
            this.props.SelectAttribute(this.props.value)
            this.props.SelectAttributeInBag(this.props.name, this.props.value)
            setTimeout(() => console.log(`${this.props.choseAttributes}`), 200)
        }
    };



    render() {
        if (this.props.name === 'Color') return (

            <div id={this.props.value}
                 className={this.props.value === this.props.attributeSelected ? 'Attribute-item-button-plp Attribute-item-button-color-plp-active': 'Attribute-item-button-plp'}
                 onClick={this.toggleClass}
                 style={{backgroundColor: this.props.value}}>
            </div>)
        return (
            <div id={this.props.value}
                 className={this.props.value === this.props.attributeSelected ? 'Attribute-item-button-plp Attribute-item-button-plp-active': 'Attribute-item-button-plp'}
                 onClick={this.toggleClass}>
                <div className='Attribute-item-button-text-plp'>{this.props.value}</div>
            </div>
        )
    }
}

export default AttributesInPLP