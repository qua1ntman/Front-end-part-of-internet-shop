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
            converterActive: false,
            myBagActive: false,
            totalBagCount: []
        }
    }

    handleOpenBag = () => {
        this.setState({
            myBagActive: this.state.myBagActive !== true
        })
    }

    handleConverterNotActive = (clicked) => {
        this.setState({
            converterActive: this.state.converterActive === clicked
        })
    }


    handleConverterActive = () => {
        this.setState({
            converterActive: this.state.converterActive !== true
        })
    }




    render() {
        let sum = 0
        this.props.chosenItemsDetailsContainer.map(item => sum += item.counter)
        return (
            <>
                <Bag key='Bag'
                     myBagActive={this.state.myBagActive}
                     chosenItemsDetailsContainer={this.props.chosenItemsDetailsContainer}
                     currency={this.props.currency}
                     currencyName={this.props.currencyName}
                     totalBagPrice={this.props.totalBagPrice}
                     totalBagPriceFunc={this.props.totalBagPriceFunc}
                     totalBagCountFunc={this.props.totalBagCountFunc}
                     totalBagCount={this.state.totalBagCount}
                     handleWindowChange={this.props.handleWindowChange}
                     handleOpenBag={this.handleOpenBag}
                     changeCounter={this.props.changeCounter}
                     chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}
                />
                <Converter
                    key='Converter'
                    handleConverterNotActive={this.handleConverterNotActive}
                    active={this.state.converterActive}
                    currencyName={this.props.currencyName}
                    currency={this.props.currency}
                    handleCurrencyChange={this.props.handleCurrencyChange}
                />
                <div className="Actions">
                    <div className='Spacer-xl'/>
                    <div className='Spacer-xl'/>
                    <div className='Currency-container' onClick={this.handleConverterActive}>
                        <div className='Currency-block'>
                            <p className='Currency'>{this.props.currency}</p>
                        </div>
                        <div className='Vector-block'>
                            <img className='Vector' src={this.state.converterActive ? `${vectorUp}` : `${vector}`} width={`6px`}
                                 height={`3px`}/>
                        </div>
                    </div>
                        {this.props.chosenItemsDetailsContainer.length === 0
                            ? <div className='Is-empty'></div>
                            : <div></div>}
                        <div className='Empty-cart' onClick={this.handleOpenBag.bind(this)}>
                            <div className={sum >0 ?'Circle Circle-active' : 'Circle'} >
                                <div className= 'Num-in-circle'>{sum}</div>
                            </div>
                            <img src={emptyCart} width={`20px`}/>
                        </div>

                </div>
            </>
        )
    }
}

export default Actions