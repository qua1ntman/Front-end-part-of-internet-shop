import React from "react";
import ChosenThingsInCart from "./ChosenThingsInCart";
import './Cart.css'


class CartItemsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisItemPriceChange: {},
            // {/*handleItemCosts: []*/}
        }
    }

    totalBagPriceFunc = (item) => {
        this.props.totalBagPriceFunc(item)
    }

    totalBagCountFunc = (item) => {
        this.props.totalBagCountFunc(item)
    }

    changeCounter = (id, counter) => {
        this.props.changeCounter (id, counter)
        console.log(id, counter)
    }
    chosenRemoveItemsFunc = (id) => {
        this.props.chosenRemoveItemsFunc(id)
        console.log(id)
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
                                currency2={this.props.currency}
                                currencyName2={this.props.currencyName}
                                totalBagPriceFunc={this.totalBagPriceFunc}
                                totalBagCountFunc={this.totalBagCountFunc}
                                totalBagPrice={this.props.totalBagPrice}
                                changeCounter={this.changeCounter}
                                chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}

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