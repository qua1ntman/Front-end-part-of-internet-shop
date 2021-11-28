import React from 'react';
import './CartParts/Cart.css'
import CartItemsContainer from "./CartParts/CartItemsContainer";
import {BackButton} from "./BagParts/Buttons";


class Cart extends React.Component {

    render() {
        if (this.props.whatListActive === 'cart') {
            return (
                <div className='Back-of-cart-window'>
                    <div className="Description-window-cart">
                        <div className='Upper-cart'>
                            <div className='Cart-word'>CART</div>
                            <BackButton
                                handleWindowChange={this.props.handleWindowChange}
                            />
                        </div>
                        <CartItemsContainer
                            chosenItems={this.props.chosenItemsDetailsContainer}
                            currencyName={this.props.currencyName}
                            totalBagPriceFunc={this.props.totalBagPriceFunc}
                            totalBagCountFunc={this.props.totalBagCountFunc}
                            totalBagPrice={this.props.totalBagPrice}
                            changeCounter={this.props.changeCounter}
                            chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}

                        />
                    </div>
                </div>
            )
        }
        return <div></div>
        }


}

export default Cart