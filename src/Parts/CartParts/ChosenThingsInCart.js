import React from 'react'
import './Cart.css'
import {PlusUnitButton, MinusUnitButton, DeleteItemButtonInCart} from "./ButtonsInCart";
import {ItemPhotoSlider, ItemPriceCart, ItemTitle, ThingCounter} from "./ChosenItemDetailsInCart";
import ChosenAttribute from "./ChosenAttributeInCart";

class ChosenThingsInCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
        }
    }

    totalBagPriceFunc = () => {
        this.props.totalBagPriceFunc({
            id: this.props.id,
            prices: this.props.prices,
            counter: this.props.counter
        })
    }

    totalBagCountFunc = () => {
        this.props.totalBagCountFunc({
            id: this.props.id,
            counter: this.props.counter
        })
    }

    changeCounter = (counter) => {
        this.props.changeCounter ({id: this.props.id, counter: counter})
    }

    handleChangeSlideIndex = (idx) => {
        this.setState({
            slideIndex: idx
        })
    }

    render() {

        return (
            <div className='One-chosen-thing-in-cart'>
                <ItemTitle name={this.props.name}
                           brand={this.props.brand}/>
                <ItemPriceCart
                    currencyName={this.props.currencyName}
                    prices={this.props.prices}
                    changeCounter={this.changeCounter}
                />
                <div className='Attribute-container-cart'>
                    {this.props.attributes.map(({name, value}) => {
                        return <ChosenAttribute
                            name={name}
                            value={value}
                        />
                    })}
                </div>



                <PlusUnitButton
                    changeCounter={this.changeCounter}
                    counter={this.props.counter}
                    totalBagPriceFunc={this.totalBagPriceFunc}
                    totalBagCountFunc={this.totalBagCountFunc}
                />

                <ThingCounter
                    counter={this.props.counter}
                />

                <MinusUnitButton
                    changeCounter={this.changeCounter}
                    counter={this.props.counter}
                    totalBagPriceFunc={this.totalBagPriceFunc}
                    totalBagCountFunc={this.totalBagCountFunc}
                />

                <DeleteItemButtonInCart
                    chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}
                    id={this.props.id}
                    handleChangeSlideIndex={this.handleChangeSlideIndex}
                />

                <ItemPhotoSlider
                    pics={this.props.pics}
                    slideIndex={this.state.slideIndex}
                    handleChangeSlideIndex={this.handleChangeSlideIndex}
                />
            </div>
        )
    }
}

export default ChosenThingsInCart