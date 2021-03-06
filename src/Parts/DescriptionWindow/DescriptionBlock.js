import React from "react";
import {ProductCost} from "../ProductParts/ProductParts";
import AttributeContainer from "./AttributeContainer";
import './DescriptionWindow.css';
import ButtonAdd from "./ButtonAdd";
import DescriptionText from "./DescriptionText";


class DescriptionBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            chosenAttributes: [],
            cartButtonActive: false
        }
    }

    handleChangeListAndDescriptionInDisc = () => {
        this.props.chosenItemDetailsContainer(this.state.chosenAttributes
            .sort((a, b) => a.name > b.name ? 1 : -1)
        )
    }

    async attributesToCreateBagComp(attrName, attrValue) {

        await this.setState(prevState => ({
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
        await this.setState({
            cartButtonActive: this.props.product.attributes.length===this.state.chosenAttributes.length
        })
    }

    render () {
        return (

            <div className='Description-block'>
                <div className='Description-item-name bold'>{this.props.product.brand}</div>
                <div className='Description-item-name'>{this.props.product.name}</div>
                <div className='Attributes-container'>{this.props.product.attributes
                    .map(({name, items}) => (
                    <AttributeContainer
                        name={name}
                        items={items}
                        attributesToCreateBagComp={this.attributesToCreateBagComp.bind(this)}

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

                <ButtonAdd
                    inStock={this.props.product.inStock}
                    cartButtonActive={this.state.cartButtonActive}
                    handleChangeListAndDescriptionInDisc={this.handleChangeListAndDescriptionInDisc}
                    product={this.props.product}

                />
                <DescriptionText
                    description={this.props.product.description}
                />
            </div>
        )
    }
}

export default DescriptionBlock


