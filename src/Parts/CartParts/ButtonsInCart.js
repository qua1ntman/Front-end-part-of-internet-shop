import React from 'react'
import './Cart.css'
import right from '../../items/Vector_right.png'
import left from '../../items/Vector_left.png'


class PlusUnitButton extends React.Component {

    async changeCounterPlus({counterChange=this.props.counter+1}){
        await this.props.changeCounter(counterChange)
        await this.props.totalBagPriceFunc() && this.props.totalBagCountFunc()
    }

    render() {
        return (
        <div className='Button-block Plus-Size1'
            onClick={this.changeCounterPlus.bind(this)}
        >
            <div className='Unit-place'>+</div>
        </div>
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
            <div className='Button-block Minus-Size1'
                onClick={this.changeCounterMinus.bind(this)}
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
                    <img alt='direction' src={this.props.direction === "next" ? right : left} className='slider-btn-img' />
                </div>
            )
        }
        return <div></div>
    }
}

class DeleteItemButtonInCart extends React.Component {

    chosenRemoveItemsFunc = ({id = this.props.id}) => {
        this.props.handleChangeSlideIndex(1)
        this.props.chosenRemoveItemsFunc(id)
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