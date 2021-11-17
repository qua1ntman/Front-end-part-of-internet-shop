import React from 'react';
import './DescriptionWindow.css'



class Attributes extends React.Component {


    toggleClass({name=this.props.name, value=this.props.value}) {
        this.props.SelectAttribute(value)
        this.props.SelectAttributeInBag(name, value)
    };



    render() {
        console.log(this.props.name)
        if (this.props.name === 'Color') return (

            <div id={this.props.value}
                className={this.props.value === this.props.attributeSelected ? 'Attribute-item-button-descr Attribute-item-button-color-active': 'Attribute-item-button-descr'}
                 onClick={this.toggleClass.bind(this)}
                 style={{backgroundColor: this.props.value}}>
            </div>)
        return (
            <div id={this.props.value}
                className={this.props.value === this.props.attributeSelected ? 'Attribute-item-button-descr Attribute-item-button-active': 'Attribute-item-button-descr'}
                 onClick={this.toggleClass.bind(this)}>
                <div className='Attribute-item-button-text'>{this.props.value}</div>
            </div>
        )
    }
}

export default Attributes