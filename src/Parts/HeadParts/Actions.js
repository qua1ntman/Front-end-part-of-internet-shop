import React from 'react';
import './Head.css';
import emptyCart from '../../items/Empty Cart.png'
import vector from '../../items/Vector.png'
import vectorUp from '../../items/Vector-up.png'
import Converter from "./Converter";
import Bag from "../Bag";

class Actions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            totalBagCount: []
        }
    }


    pageScrollOff = () => {
        this.props.appRef.current.classList.add('Remove-scroll')
    }

    pageScrollOn = () => {
        this.props.appRef.current.classList.remove('Remove-scroll')
    }

    async handleOpenBag(event) {
        await event.stopPropagation()
        await this.props.handleOpenBag(this.props.myBagActive!==true)

       if (this.props.myBagActive) {
           await this.pageScrollOff()
       } else {
           await this.pageScrollOn()
       }

    }


    handleConverterActive = (event) => {
        event.stopPropagation()
        this.props.handleConverterActive(this.props.converterActive !== true)
    }


    render() {
        let sum = 0
        this.props.chosenItemsDetailsContainer.map(item => sum += item.counter)
        return (
            <>
                <Bag key='Bag'
                     myBagActive={this.props.myBagActive}
                     chosenItemsDetailsContainer={this.props.chosenItemsDetailsContainer}
                     currencyName={this.props.currencyName}
                     totalBagPrice={this.props.totalBagPrice}
                     totalBagPriceFunc={this.props.totalBagPriceFunc}
                     totalBagCountFunc={this.props.totalBagCountFunc}
                     totalBagCount={this.state.totalBagCount}
                     handleWindowChange={this.props.handleWindowChange}
                     handleOpenBag={this.props.handleOpenBag}
                     changeCounter={this.props.changeCounter}
                     chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}
                     pageScrollOn={this.pageScrollOn}
                />
                <Converter
                    key='Converter'
                    handleConverterActive={this.props.handleConverterActive}
                    active={this.props.converterActive}
                    currencyName={this.props.currencyName}
                    handleCurrencyChange={this.props.handleCurrencyChange}
                />
                <div className="Actions">
                    <div className='Spacer-xl'/>
                    <div className='Spacer-xl'/>
                    <div className='Currency-container' onClick={(event) => this.handleConverterActive(event)}>
                        <div className='Currency-block'>
                            <p className='Currency'>{Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: this.props.currencyName,
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            }).format(0).toString().replace('0','')}</p>
                        </div>
                        <div className='Vector-block'>
                            <img alt="img" className='Vector' src={this.props.converterActive ? `${vectorUp}` : `${vector}`}
                                 />
                        </div>
                    </div>
                        {this.props.chosenItemsDetailsContainer.length === 0
                            ? <div className='Is-empty'></div>
                            : <div></div>}
                        <div id='Open-bag' className='Empty-cart' onClick={(event) => this.handleOpenBag(event)}>
                            <div className={sum > 0 ? 'Circle Circle-active' : 'Circle'} >
                                <div className= 'Num-in-circle'>{sum}</div>
                            </div>
                            <img alt="img" src={emptyCart} className='Empty-cart-img'/>
                        </div>

                </div>
            </>
        )
    }
}

export default Actions