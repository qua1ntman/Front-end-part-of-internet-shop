import React from 'react';
import './CartParts/Cart.css'
import CartItemsContainer from "./CartParts/CartItemsContainer";
import {BackButton} from "./BagParts/Buttons";


class Cart extends React.Component {

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
    }

    totalBagPriceFunc = (item) => {
        this.props.totalBagPriceFunc(item)
    }

    totalBagCountFunc = (item) => {
        this.props.totalBagCountFunc(item)
    }

    changeCounter = (id, counter) => {
        this.props.changeCounter ({id: id, counter: counter})
        console.log({id: id, counter: counter})
    }
    chosenRemoveItemsFunc = (id) => {
        this.props.chosenRemoveItemsFunc(id)
        console.log(id)
    }

    render() {
        if (this.props.whatListActive === 'cart') {
            return (
                <div className='Back-of-cart-window'>
                    <div className="Description-window-cart">
                        <div className='Upper-cart'>
                            <div className='Cart-word'>CART</div>
                            <BackButton
                                handleWindowChange={this.handleWindowChange}
                            />
                        </div>
                        <CartItemsContainer
                            chosenItems={this.props.chosenItemsDetailsContainer}
                            currency={this.props.currency}
                            currencyName={this.props.currencyName}
                            totalBagPriceFunc={this.totalBagPriceFunc}
                            totalBagCountFunc={this.totalBagCountFunc}
                            totalBagPrice={this.props.totalBagPrice}
                            changeCounter={this.changeCounter}
                            chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}

                        />
                    </div>
                </div>
            )
        }
        return <div></div>
        }


}

export default Cart