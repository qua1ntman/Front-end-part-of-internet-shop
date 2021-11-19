import React from "react";
import ChosenThingsInCart from "./ChosenThingsInCart";
import './Cart.css'


class CartItemsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisItemPriceChange: {},
        }
    }



    render() {
        if (this.props.chosenItems.length > 0) {
            return (
                <div className='Chosen-things-container-in-cart'>
                    {this.props.chosenItems.map((item) => {
                            return <ChosenThingsInCart
                                id={item.id}
                                counter={item.counter}
                                brand={item.brand}
                                name={item.name}
                                pics={item.pics}
                                attributes={item.attributes}
                                prices={item.prices}
                                currency={this.props.currency}
                                currencyName={this.props.currencyName}
                                totalBagPriceFunc={this.props.totalBagPriceFunc}
                                totalBagCountFunc={this.props.totalBagCountFunc}
                                totalBagPrice={this.props.totalBagPrice}
                                changeCounter={this.props.changeCounter}
                                chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}

                            />
                        }
                    )
                    }
                </div>
            )
        }
        return <div className='Empty-cart-word'>Your cart is empty</div>
    }
}

export default CartItemsContainer