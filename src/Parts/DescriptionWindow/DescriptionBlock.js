import React from "react";
import {ProductCost} from "../ProductParts/ProductParts";
import AttributeContainer from "./AttributeContainer";


class DescriptionBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            chosenAttributes: []
        }
    }

    handleChangeListAndDescriptionInDisc = ({chosenAttributes=this.state.chosenAttributes, active='products'}) => {
        this.props.chosenItemDetailsContainer(chosenAttributes
            .sort((a, b) => a.name > b.name ? 1:-1)
        )
        this.props.handleWindowChange(active)
    }

    attributesToCreateBagComp = (attrName, attrValue) => {

        this.setState(prevState => ({
            chosenAttributes: this.state.chosenAttributes.filter(item => item.name === attrName).length > 0
                ? this.state.chosenAttributes.map( item => item.name === attrName
                    ? {
                    name: attrName,
                    value: attrValue,
                    } : item)
                : [...prevState.chosenAttributes, {
                    name: attrName,
                    value: attrValue,
                }]
        }))
    }

    render () {
        return (

            <div className='Description-block'>

                <div className='Description-item-name'>{this.props.product.name}</div>
                <div className='Attributes-container'>{this.props.product.attributes.map(({name, items}) => (
                    <AttributeContainer
                        name={name}
                        items={items}
                        attributesToCreateBagComp={this.attributesToCreateBagComp}

                    />
                )) || <div></div>} </div>
                <div className='Price-text'>PRICE:</div>
                <div className='Description-cost'>
                    <ProductCost
                        currencyProd={this.props.currency}
                        currencyName={this.props.currencyName}
                        prices={this.props.product.prices}
                    />
                </div>
                <div className='Add-to-cart-button-block'
                     onClick={this.handleChangeListAndDescriptionInDisc}
                >
                    <div className='Add-to-cart-button'>ADD TO CART</div>
                </div>
                <div className='Description-text-container'>
                    <div className='Description-text' dangerouslySetInnerHTML={{__html: this.props.product.description}} ></div>
                </div>

            </div>
        )
    }
}

export default DescriptionBlock


