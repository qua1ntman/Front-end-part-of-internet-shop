import React from 'react'
import './Bag.css'



class PlusUnitButton extends React.Component {

    async changeCounterPlus({counterChange=this.props.counter+1}) {
        await this.props.changeCounter(counterChange)
        await this.props.totalBagPriceFunc() && this.props.totalBagCountFunc()
    }

    render() {
        return (
        <div className='Button-block-bag Plus-Size1-bag'
            onClick={this.changeCounterPlus.bind(this)}
        >+</div>
        )
    }
}

class MinusUnitButton extends React.Component {

    async changeCounterMinus({counterChange=this.props.counter===1 ? 1 : this.props.counter-1}) {
        await this.props.changeCounter(counterChange)
        await this.props.totalBagPriceFunc() && this.props.totalBagCountFunc()
    }

    render() {
        return (
            <div className='Button-block-bag Minus-Size1-bag'
                onClick={this.changeCounterMinus.bind(this)}
            >-</div>
        )
    }
}

class ViewBagItem extends React.Component {



    render() {
        return (
            <div className='Bag-buttons View-bag-item-button'
                 onClick={() => this.props.handleWindowChange('cart')}
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

    render() {
        return (
            <div className='Delete-button'
                 onClick={() => this.props.chosenRemoveItemsFunc(this.props.id)}
            >x</div>
        )
    }
}


class BackButton extends React.Component {

    render() {
        return (
            <div className='Back-to-products-block'
                 onClick={() => this.props.handleWindowChange('products')}
            >
                <div className='Back-to-products'>
                    <div className='Back-to-products-text'>{'<'}- Back </div>
                </div>
            </div>
        )
    }
}



export {PlusUnitButton, MinusUnitButton, ViewBagItem, CheckOutItem, DeleteItemButton, BackButton}