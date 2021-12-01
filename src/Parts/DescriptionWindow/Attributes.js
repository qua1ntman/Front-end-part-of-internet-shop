import React from 'react';
import './DescriptionWindow.css'
import '../../App.css'
// import classNames from 'classnames'


class Attributes extends React.Component {


    toggleClass = () => {
        this.props.SelectAttribute(this.props.displayValue)
        this.props.SelectAttributeInBag(this.props.name, this.props.displayValue)
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


        if (this.props.name === 'Color') {
            return (
                <div id={this.props.displayValue}
                     className={this.props.displayValue === this.props.attributeSelected ? `Attribute-item-button-descr ${color} Attribute-item-button-color-active`: `Attribute-item-button-descr ${color}`}
                     onClick={this.toggleClass}
                >
                </div>
        )} return (
            <div id={this.props.displayValue}
                 className={this.props.displayValue === this.props.attributeSelected ? 'Attribute-item-button-descr Attribute-item-button-active': 'Attribute-item-button-descr'}
                 onClick={this.toggleClass}>
                <div className='Attribute-item-button-text'>{this.props.value}</div>
            </div>
        )
    }
}

export default Attributes