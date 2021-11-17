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


    handleDescriptionData(product){
        console.log(product)
    }

    handleThingData3(product) {
        this.setState({
            productObj: product

        })
        this.handleDescriptionData(product)

    }

    chosenItemsDetailsContainerFunc (chosenItemDetailsObj) {

        this.setState(prevState  => ({
            chosenItemsDetailsContainer: [...prevState.chosenItemsDetailsContainer, chosenItemDetailsObj]
        }))
    }

    chosenRemoveItemsFunc = (id) => {
        this.setState({
            chosenItemsDetailsContainer: this.state.chosenItemsDetailsContainer
                .filter(item => item.id !== id)
        })
        console.log(id)
        setTimeout(() => console.log( this.state.chosenItemsDetailsContainer),300)

    }

    totalBagCountFunc = (newElem) => {
        this.setState(prevState => ({
            totalBagCount: this.state.totalBagCount.filter(item => item.id === newElem.id).length > 0
                ? this.state.totalBagCount.map(item => item.id === newElem.id ? newElem : item)
                : [...prevState.totalBagCount, newElem]
        }))
        setTimeout(() => console.log(this.state.totalBagCount), 100)
    }

    totalBagPriceFunc (elem) {

        this.setState(prevState => ({
            totalBagPrice: this.state.totalBagPrice.filter(item => item.id === elem.id).length > 0
                ? this.state.totalBagPrice.map( item => item.id === elem.id ? elem : item)
                : [...prevState.totalBagPrice, elem]}))
        setTimeout(() => console.log(this.state.totalBagPrice),100)

    }

    handleChangeCategory = (item) => {
        this.setState({
            categoryActive: item
        })
    }

    changeCounter = (elem) => {
        console.log(this.state.chosenItemsDetailsContainer)
        this.setState({
            chosenItemsDetailsContainer:
                this.state.chosenItemsDetailsContainer
                    .filter(item => item.id === elem.id).length > 0
                ? this.state.chosenItemsDetailsContainer.map(item => item.id === elem.id
                    ? {...item, counter: elem.counter}
                    : item)
                : this.state.chosenItemsDetailsContainer
        })
        setTimeout(() => console.log(elem.id),0)

    }

    render() {

        return (
            <div className="Base">
                <div className="App">
                    <Head
                        key='Head'
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        category={this.state.category}
                        handleCurrencyChange={this.handleCurrencyChange.bind(this)}
                        techPageActive={this.state.techPageActive}
                        clothesPageActive={this.state.clothesPageActive}
                        chosenItemsDetailsContainer={this.state.chosenItemsDetailsContainer}
                        totalBagPrice={this.state.totalBagPrice}
                        totalBagPriceFunc={this.totalBagPriceFunc.bind(this)}
                        categoryActive={this.state.categoryActive}
                        handleChangeCategory={this.handleChangeCategory}
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                        totalBagCountFunc={this.totalBagCountFunc}
                        changeCounter={this.changeCounter}
                        chosenRemoveItemsFunc={this.chosenRemoveItemsFunc}

                    />
                    <ProductListContainer
                        key='ProductList'
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        techPageActive={this.state.techPageActive}
                        clothesPageActive={this.state.clothesPageActive}
                        categoryActive={this.state.categoryActive}
                        handleThingData3={this.handleThingData3.bind(this)}
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                    />
                    <DescriptionWindow
                        key='DescriptionWindow'
                        product={this.state.productObj}
                        handleDescriptionData={this.handleDescriptionData.bind(this)}
                        currency={this.state.currency}
                        currencyName={this.state.currencyName}
                        chosenItemsDetailsContainer={this.chosenItemsDetailsContainerFunc.bind(this)}
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                    />
                    <Cart
                        handleWindowChange={this.handleWindowChange}
                        whatListActive={this.state.whatListActive}
                        chosenItemsDetailsContainer={this.state.chosenItemsDetailsContainer}
                        totalBagPriceFunc={this.totalBagPriceFunc.bind(this)}
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
