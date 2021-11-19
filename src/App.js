import React from 'react';
import './App.css';
import './Parts/ProductParts/Product.css'
import Head from './Parts/Head'
import ProductListContainer from "./Parts/ProductList";
import {DescriptionWindow} from "./Parts/DescriptionWindow";
import Cart from "./Parts/Cart";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: '€',
            currencyName: 'EUR',
            categoryActive: 'tech',
            productObj: '',
            chosenItemsDetailsContainer: [],
            totalBagPrice: [],
            whatListActive: 'products',
            totalBagCount: []
        }
    }


    handleWindowChange = (active) => {
        this.setState({
            whatListActive: active
        })
    }


    handleCurrencyChange = (currencyProp, currencyNameProp) => {
        this.setState({
            currency: currencyProp,
            currencyName:  currencyNameProp,
        })
    }


    handleThingData = (product) => {
        this.setState({
            productObj: product
        })
    }

    chosenItemsDetailsContainerFunc = (elem) => {
        this.setState(prevState  => ({
            chosenItemsDetailsContainer:  this.state.chosenItemsDetailsContainer.filter(item => item.id === elem.id).length > 0
            ? this.state.chosenItemsDetailsContainer.map(item => item.id === elem.id ? {...item, counter: item.counter+1} : item)
            : [...prevState.chosenItemsDetailsContainer, elem]
        }))
    }

    chosenRemoveItemsFunc = (id) => {
        this.setState({
            chosenItemsDetailsContainer: this.state.chosenItemsDetailsContainer
                .filter(item => item.id !== id)
        })

    }

    totalBagCountFunc = (elem) => {
        this.setState(prevState => ({
            totalBagCount: this.state.totalBagCount.filter(item => item.id === elem.id).length > 0
                ? this.state.totalBagCount.map(item => item.id === elem.id ? elem : item)
                : [...prevState.totalBagCount, elem]
        }))
    }

    totalBagPriceFunc = (elem) => {

        this.setState(prevState => ({
            totalBagPrice: this.state.totalBagPrice.filter(item => item.id === elem.id).length > 0
                ? this.state.totalBagPrice.map( item => item.id === elem.id ? elem : item)
                : [...prevState.totalBagPrice, elem]}))

    }

    handleChangeCategory = (item) => {
        this.setState({
            categoryActive: item
        })
    }

    changeCounter = (elem) => {
        this.setState({
            chosenItemsDetailsContainer:
                this.state.chosenItemsDetailsContainer
                    .filter(item => item.id === elem.id).length > 0
                ? this.state.chosenItemsDetailsContainer.map(item => item.id === elem.id
                    ? {...item, counter: elem.counter}
                    : item)
                : this.state.chosenItemsDetailsContainer
        })

    }

    render() {

        return (
            <div className="Base">
                <div className="App">
                    <Head
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        category={this.state.category}
                        handleCurrencyChange={this.handleCurrencyChange}
                        techPageActive={this.state.techPageActive}
                        clothesPageActive={this.state.clothesPageActive}
                        chosenItemsDetailsContainer={this.state.chosenItemsDetailsContainer}
                        totalBagPrice={this.state.totalBagPrice}
                        totalBagPriceFunc={this.totalBagPriceFunc}
                        categoryActive={this.state.categoryActive}
                        handleChangeCategory={this.handleChangeCategory}
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                        totalBagCountFunc={this.totalBagCountFunc}
                        changeCounter={this.changeCounter}
                        chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}

                    />
                    <ProductListContainer
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        techPageActive={this.state.techPageActive}
                        clothesPageActive={this.state.clothesPageActive}
                        categoryActive={this.state.categoryActive}
                        handleThingData={this.handleThingData}
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                    />
                    <DescriptionWindow
                        product={this.state.productObj}
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        chosenItemsDetailsContainer={this.chosenItemsDetailsContainerFunc}
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                    />
                    <Cart
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                        chosenItemsDetailsContainer={this.state.chosenItemsDetailsContainer}
                        totalBagPriceFunc={this.totalBagPriceFunc}
                        totalBagCountFunc={this.totalBagCountFunc}
                        totalBagPrice={this.state.totalBagPrice}
                        changeCounter={this.changeCounter}
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}


                    />
                </div>
            </div>
        );
    }
}
export default App;
