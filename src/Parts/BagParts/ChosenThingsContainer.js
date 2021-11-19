import React from 'react'
import './Bag.css'
import ChosenThings from "./ChosenThing";

class ChosenThingsContainer extends React.Component {


    // totalBagPriceFunc = (item) => {
    //     this.props.totalBagPriceFunc(item)
    // }
    //
    // totalBagCountFunc = (item) => {
    //     this.props.totalBagCountFunc(item)
    // }

    // changeCounter = (id, counter) => {
    //     this.props.changeCounter (id, counter)
    // }

    // chosenRemoveItemsFunc = (id) => {
    //     this.props.chosenRemoveItemsFunc(id)
    //
    // }

    render() {
        return (
            <div id='container' className='Chosen-things-container-bag'>
                {this.props.chosenItems.map((item) => {
                        return <ChosenThings
                                    id={item.id}
                                    counter={item.counter}
                                    brand={item.brand}
                                    name={item.name}
                                    pics={item.pics}
                                    attributes={item.attributes}
                                    prices={item.prices}
                                    currency2={this.props.currency}
                                    currencyName2={this.props.currencyName}
                                    totalBagPriceFunc={this.props.totalBagPriceFunc}
                                    totalBagCountFunc={this.props.totalBagCountFunc}
                                    changeCounter={this.props.changeCounter}
                                    chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}
                                    chosenItems={this.props.chosenItems}
                                />
                            }
                        )
                    }
            </div>
        )
    }
}


export {ChosenThingsContainer}