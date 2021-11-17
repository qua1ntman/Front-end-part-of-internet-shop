import React from 'react';
import './BagParts/Bag.css'
import MyBag from "./BagParts/MyBag";
import {ChosenThingsContainer} from "./BagParts/ChosenThingsContainer";
import TotalPrice from "./BagParts/TotalPrice";
import {CheckOutItem, ViewBagItem} from "./BagParts/Buttons";


class Bag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: []
        }
    }

    totalPriceChange (thingTotalPrice) {
        this.setState(prevState  => ({
            totalPrice: [...prevState.totalPrice, thingTotalPrice]
        }))
    }

    totalBagPriceFunc = (item) => {
        this.props.totalBagPriceFunc(item)
    }

    totalBagCountFunc = (item) => {
        this.props.totalBagCountFunc(item)
    }

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
        this.props.handleOpenBag()
    }

    changeCounter = (id, counter) => {
        this.props.changeCounter (id, counter)
        console.log(id, counter)
    }

    chosenRemoveItemsFunc = (id) => {
        if (this.props.chosenItemsDetailsContainer.length === 1) {
            this.props.chosenRemoveItemsFunc(id)
            this.props.handleOpenBag()
        } else {
            this.props.chosenRemoveItemsFunc(id)
        }
        console.log(id)
    }


    render() {
        return (
            <div className={this.props.myBagActive ? 'Gray-bag-back Gray-bag-back-active' : 'Gray-bag-back'}>
                <div className="Bag-container">
                    <MyBag
                        chosenItems={this.props.chosenItemsDetailsContainer}
                    />
                    <ChosenThingsContainer
                        chosenItems={this.props.chosenItemsDetailsContainer}
                        currency={this.props.currency}
                        currencyName={this.props.currencyName}
                        totalPriceChange={this.totalPriceChange.bind(this)}
                        totalBagPriceFunc={this.totalBagPriceFunc}
                        totalBagCountFunc={this.totalBagCountFunc}
                        changeCounter={this.changeCounter}
                        chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}
                    />
                    <TotalPrice
                        currency={this.props.currency}
                        currencyName={this.props.currencyName}
                        chosenItems={this.props.chosenItemsDetailsContainer}
                    />
                    <div className='Bag-button-container'>
                        <ViewBagItem
                            handleWindowChange={this.handleWindowChange}
                        />
                        <CheckOutItem/>
                    </div>

                </div>
            </div>
        )
    }
}


export default Bag;