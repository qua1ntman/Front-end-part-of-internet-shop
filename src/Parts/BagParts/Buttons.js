import React from 'react'
import './Bag.css'



class PlusUnitButton extends React.Component {

    changeCounterPlus = ({counterChange=this.props.counter+1}) => {
        this.props.changeCounter(counterChange)
        setTimeout(() => this.props.totalBagPriceFunc() && this.props.totalBagCountFunc(), 50)
    }

    render() {
        return (
        <div className='Button-block-bag Plus-Size1-bag'
            onClick={this.changeCounterPlus}
        >+</div>
        )
    }
}

class MinusUnitButton extends React.Component {

    changeCounterMinus = ({counterChange=this.props.counter-1}) => {
        this.props.changeCounter(counterChange)
        setTimeout(() => this.props.totalBagPriceFunc() && this.props.totalBagCountFunc(), 50)
    }

    render() {
        return (
            <div className='Button-block-bag Minus-Size1-bag'
                onClick={this.changeCounterMinus}
            >-</div>
        )
    }
}

class ViewBagItem extends React.Component {

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
    }

    render() {
        return (
            <div className='Bag-buttons View-bag-item-button'
                 onClick={() => this.handleWindowChange('cart')}
            >
                <div className='Buttons-bag-text'>VIEW BAG</div>
            </div>
        )
    }
}

class CheckOutItem extends React.Component {

    render() {
        return (
            <div className='Bag-buttons Check-out-item-button'>
                <div className='Buttons-bag-text'>CHECK OUT</div>
            </div>
        )
    }
}

class DeleteItemButton extends React.Component {

    chosenRemoveItemsFunc = ({id=this.props.id}) => {
        this.props.chosenRemoveItemsFunc(id)
        console.log(id)

    }

    render() {
        return (
            <div className='Delete-button'
                 onClick={this.chosenRemoveItemsFunc}
            >x</div>
        )
    }
}


class BackButton extends React.Component {

    handleWindowChange = ({active='products'}) => {
        this.props.handleWindowChange(active)
    }

    render() {
        return (
            <div className='Back-to-products-block'
                 onClick={this.handleWindowChange}
            >
                <div className='Back-to-products'>
                    <div className='Back-to-products-text'>{'<'}- Back </div>
                </div>
            </div>
        )
    }
}



export {PlusUnitButton, MinusUnitButton, ViewBagItem, CheckOutItem, DeleteItemButton, BackButton}