import React from 'react'
import './Bag.css'
import {PlusUnitButton, MinusUnitButton, DeleteItemButton} from "./Buttons";
import {ItemPhoto, ItemPrice, ItemTitle, ThingCounter} from "./ChosenItemDetails";
import ChosenAttribute from "./ChosenAttribute";

class ChosenThings extends React.Component {


    changeCounter = (counter) => {
            this.props.changeCounter (this.props.id, counter)
        console.log(this.props.id, counter)
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

    chosenRemoveItemsFunc = (id) => {
        this.props.chosenRemoveItemsFunc(id)
        console.log(123123)

    }

    render() {

        return (
            <div id='chosenThing' className='One-chosen-thing-bag'>
                <ItemTitle name={this.props.name}
                           brand={this.props.brand}/>
                <ItemPrice
                    currency1={this.props.currency2}
                    currencyName1={this.props.currencyName2}
                    prices={this.props.prices}
                    counter={this.props.counter}
                />
                <div className='Attribute-container'>
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

                <ItemPhoto photo={this.props.pics[0]}/>

                <DeleteItemButton
                    chosenItems={this.props.chosenItems}
                    id={this.props.id}
                    chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}
                />



            </div>
        )
    }
}

export default ChosenThings