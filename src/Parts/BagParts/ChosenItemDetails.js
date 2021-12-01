import React from 'react'
import './Bag.css'
import ItemCostInBag from "./ItemCostInBag";

class ItemPhoto extends React.Component {

    render() {
        return (
            <div className='Pic-of-thing-bag'>
                <img alt="img" src={this.props.photo} className='Img-props-bag'/>
            </div>
        )
    }
}

class ItemTitle extends React.Component {

    render() {
        return (
            <>
                <h1 className='Choosing-thing-text-bag Brand-of-chosen-thing-bag'>{this.props.brand}</h1>
                <h1 className='Choosing-thing-text-bag Title-of-chosen-thing-bag'>{this.props.name}</h1>
            </>
        )
    }
}

class ItemPrice extends React.Component {


    render() {
        return (
            <div className='Cost-in-bag-block-bag'>
                <ItemCostInBag
                    currencyName={this.props.currencyName}
                    prices={this.props.prices}
                    counter={this.props.counter}
                />
            </div>
        )
    }
}

class ThingCounter extends React.Component {

    render() {
        return (
            <h1 className='Numb-of-things-bag'>{this.props.counter}
            </h1>
        )
    }
}

export {ItemPhoto, ItemTitle, ItemPrice, ThingCounter}