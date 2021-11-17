import React from 'react';
import './HeadParts/Head.css';
import Navig from "./HeadParts/Navig";
import Actions from "./HeadParts/Actions";
import Logo from "./HeadParts/Logo";


class Head extends React.Component  {

    handleCurrencyChangeHead = (currencyProp, currencyNameProp) => {
        this.props.handleCurrencyChange (currencyProp, currencyNameProp)
        console.log('Head ,'+currencyProp+', '+currencyNameProp)

    }


    handleChangeCategory = (item) => {
        this.props.handleChangeCategory(item)
    }

    totalBagPriceFunc(chosenCategory){
        this.props.totalBagPriceFunc(chosenCategory)
    }

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
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
        return (
            <div className="Head">
                <Navig
                    category={this.props.category}
                    techPageActive={this.props.techPageActive}
                    clothesPageActive={this.props.clothesPageActive}
                    categoryActive={this.props.categoryActive}
                    handleChangeCategory={this.handleChangeCategory}
                    handleWindowChange={this.handleWindowChange}
                />
                <Logo/>
                <Actions
                    key='Actions'
                    currency={this.props.currency}
                    currencyName={this.props.currencyName}
                    handleCurrencyChangeHead={this.handleCurrencyChangeHead.bind(this)}
                    chosenItemsDetailsContainer={this.props.chosenItemsDetailsContainer}
                    totalBagPrice={this.props.totalBagPrice}
                    totalBagPriceFunc={this.totalBagPriceFunc.bind(this)}
                    handleWindowChange={this.handleWindowChange}
                    totalBagCountFunc={this.totalBagCountFunc}
                    changeCounter={this.changeCounter}
                    chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}
                />
            </div>
        )
    }
}


export default Head