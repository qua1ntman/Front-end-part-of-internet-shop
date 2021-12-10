import React from 'react';
import './BagParts/Bag.css'
import MyBag from "./BagParts/MyBag";
import {ChosenThingsContainer} from "./BagParts/ChosenThingsContainer";
import TotalPrice from "./BagParts/TotalPrice";
import {CheckOutItem, ViewBagItem} from "./BagParts/Buttons";


class Bag extends React.Component {

    async handleWindowChange(active){
        await this.props.handleWindowChange(active)
        await this.props.handleOpenBag(false)
        await this.props.pageScrollOn()
    }

    chosenRemoveItemsFunc = (id) => {
        if (this.props.chosenItemsDetailsContainer.length === 1) {
            this.props.chosenRemoveItemsFunc(id)
            this.props.handleOpenBag(false)
        } else {
            this.props.chosenRemoveItemsFunc(id)
        }
    }

    render() {
        return (
            <div id='Bag-back'
                 className={this.props.myBagActive ? 'Gray-bag-back Gray-bag-back-active' : 'Gray-bag-back'}

            >
                <div id='Bag' className="Bag-container"
                     onClick={(event) => event.stopPropagation()}
                >
                    <MyBag
                        chosenItems={this.props.chosenItemsDetailsContainer}
                    />
                    <ChosenThingsContainer
                        chosenItems={this.props.chosenItemsDetailsContainer}
                        currencyName={this.props.currencyName}
                        totalBagPriceFunc={this.props.totalBagPriceFunc}
                        totalBagCountFunc={this.props.totalBagCountFunc}
                        changeCounter={this.props.changeCounter}
                        chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}
                    />
                    <TotalPrice
                        currencyName={this.props.currencyName}
                        chosenItems={this.props.chosenItemsDetailsContainer}
                    />
                    <div className='Bag-button-container'>
                        <ViewBagItem
                            handleWindowChange={this.handleWindowChange.bind(this)}
                        />
                        <CheckOutItem/>
                    </div>

                </div>
            </div>
        )
    }
}


export default Bag;