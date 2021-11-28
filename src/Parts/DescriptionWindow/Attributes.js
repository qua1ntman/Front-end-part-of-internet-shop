import React from 'react';
import './DescriptionWindow.css'


class Attributes extends React.Component {


    toggleClass = () => {
        this.props.SelectAttribute(this.props.value)
        this.props.SelectAttributeInBag(this.props.name, this.props.value)
    };

    render() {
        if (this.props.name === 'Color') {
            return (
                <div id={this.props.value}
                    className={this.props.value === this.props.attributeSelected ? `Attribute-item-button-descr Attribute-item-button-color-active`: `Attribute-item-button-descr`}
                    onClick={this.toggleClass}
                    style={{backgroundColor: this.props.value}}
                >
                </div>
        )} return (
            <div id={this.props.value}
                 className={this.props.value === this.props.attributeSelected ? 'Attribute-item-button-descr Attribute-item-button-active': 'Attribute-item-button-descr'}
                 onClick={this.toggleClass}>
                <div className='Attribute-item-button-text'>{this.props.value}</div>
            </div>
        )
}
}

export default Attributes