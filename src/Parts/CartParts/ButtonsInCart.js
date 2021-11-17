import React from 'react'
import './Cart.css'
import right from '../../items/Vector_right.png'
import left from '../../items/Vector_left.png'


class PlusUnitButton extends React.Component {

    changeCounterPlus = ({counterChange=this.props.counter+1}) => {
        this.props.changeCounter(counterChange)
        setTimeout(() => this.props.totalBagPriceFunc() && this.props.totalBagCountFunc(), 50)
    }

    render() {
        return (
        <div className='Button-block Plus-Size1'
            onClick={this.changeCounterPlus}
        >
            <div className='Unit-place'>+</div>
        </div>
        )
    }
}

class MinusUnitButton extends React.Component {

    changeCounterMinus = ({counterChange=this.props.counter-1}) => {
        this.props.changeCounter(counterChange)
        setTimeout(() => this.props.totalBagPriceFunc() && this.props.totalBagCountFunc(), 50)
        console.log(counterChange)
    }

    render() {
        return (
            <div className='Button-block Minus-Size1'
                onClick={this.changeCounterMinus}
            >
                <div className='Unit-place'>-</div>
            </div>
        )
    }
}


class BtnSlider extends React.Component {

    render() {
        if (this.props.pics.length > 1) {
            return (
                <div
                    onClick={this.props.moveSlide}
                    className={this.props.direction === "next" ? "btn-slide right" : "btn-slide left"}
                >
                    <img src={this.props.direction === "next" ? right : left} width='6px' height='12px'/>
                </div>
            )
        }
        return <div></div>
    }
}

class DeleteItemButtonInCart extends React.Component {

    chosenRemoveItemsFunc = ({id=this.props.id}) => {
        this.props.chosenRemoveItemsFunc(id)
        console.log(id)
    }

    render() {
        return (
            <div className='Delete-button-cart'
                 onClick={this.chosenRemoveItemsFunc}
            >x</div>
        )
    }
}



export {PlusUnitButton, MinusUnitButton, BtnSlider, DeleteItemButtonInCart}