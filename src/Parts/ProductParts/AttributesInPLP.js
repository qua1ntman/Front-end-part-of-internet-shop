import React from 'react';
import './Product.css'
// import classNames from "classnames";


class AttributesInPLP extends React.Component {


    toggleClass = () => {

        if (!this.props.choseAttributes) {
            this.props.SelectAttribute(this.props.displayValue)
            this.props.SelectAttributeInBag(this.props.name, this.props.displayValue)

        } else if (this.props.choseAttributes) {
            this.props.SelectAttribute(this.props.displayValue)
            this.props.SelectAttributeInBag(this.props.name, this.props.displayValue)
        }
    };



    render() {
        // let color = classNames({
        //     "Color-Green": this.props.displayValue === "Green",
        //     "Color-Cyan": this.props.displayValue === "Cyan",
        //     "Color-Blue": this.props.displayValue === "Blue",
        //     "Color-Black": this.props.displayValue === "Black",
        //     "Color-White": this.props.displayValue === "White",
        // })

        let color = `Color-${this.props.displayValue}`

        if (this.props.name === 'Color') return (
            <div id={this.props.displayValue}
                 className={this.props.displayValue === this.props.attributeSelected ? `Attribute-item-button-plp ${color} Attribute-item-button-color-plp-active`: `Attribute-item-button-plp ${color}`}
                 onClick={this.toggleClass}
            >
            </div>)
        return (
            <div id={this.props.displayValue}
                 className={this.props.displayValue === this.props.attributeSelected ? 'Attribute-item-button-plp Attribute-item-button-plp-active': 'Attribute-item-button-plp'}
                 onClick={this.toggleClass}>
                <div className='Attribute-item-button-text-plp'>{this.props.value}</div>
            </div>
        )
    }
}

export default AttributesInPLP