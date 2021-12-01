import React from 'react';
import './HeadParts/Head.css';
import Navig from "./HeadParts/Navig";
import Actions from "./HeadParts/Actions";
import Logo from "./HeadParts/Logo";


class Head extends React.Component  {

    changeCounter = (id, counter) => {
        this.props.changeCounter ({id: id, counter: counter})
    }

    render() {
        return (
            <div className="Head">
                <Navig
                    category={this.props.category}
                    techPageActive={this.props.techPageActive}
                    clothesPageActive={this.props.clothesPageActive}
                    categoryActive={this.props.categoryActive}
                    handleChangeCategory={this.props.handleChangeCategory}
                    handleWindowChange={this.props.handleWindowChange}
                />
                <Logo/>
                <Actions
                    currencyName={this.props.currencyName}
                    handleCurrencyChange={this.props.handleCurrencyChange}
                    chosenItemsDetailsContainer={this.props.chosenItemsDetailsContainer}
                    totalBagPrice={this.props.totalBagPrice}
                    totalBagPriceFunc={this.props.totalBagPriceFunc}
                    totalBagCountFunc={this.props.totalBagCountFunc}
                    handleWindowChange={this.props.handleWindowChange}
                    changeCounter={this.changeCounter}
                    chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}
                    converterActive={this.props.converterActive}
                    myBagActive={this.props.myBagActive}
                    handleOpenBag={this.props.handleOpenBag}
                    handleConverterActive={this.props.handleConverterActive}
                    appRef={this.props.appRef}
                />
            </div>
        )
    }
}


export default Head