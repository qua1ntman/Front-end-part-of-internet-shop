import React from 'react';
import './Product.css'
import { ProductCost, ProductName, ProductPic} from "./ProductParts";
import circleIcon from '../../items/Circle Icon.png'
import AttributeContainerInPLP from "./AttributeContainerInPLP";


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenItemDetailsObj: {},
            attributesInPLPActive: false
        }
    }

    chosenItemDetailsContainer = (attributes) => {
        this.props.chosenItemsDetailsContainer({
            id: this.props.productQuery.name+attributes.map(item => item.value),
            counter: 1,
            name: this.props.productQuery.name,
            brand: this.props.productQuery.brand,
            pics: this.props.productQuery.gallery,
            prices: this.props.productQuery.prices,
            attributes: attributes
        });
    }


    handleChangeClick = (val1, val2) => {
        this.props.handleWindowChange(val1)
        this.props.handleThingData(val2)

    }

    choseProdInPLPClick = (bool) => {
        this.setState({
            attributesInPLPActive: bool
        })
    }

    choseProdInPLPClickEvent = (event, bool) => {
        this.choseProdInPLPClick(bool)
        event.stopPropagation()
    }
    choseProdInPLPClickByGreen = (event, attribute) => {
        this.chosenItemDetailsContainer(attribute)
        event.stopPropagation()
    }


    render() {
        return (
            <div className='Product-item'>
                <OutOfStock productQuery={this.props.productQuery}
                            handleChangeClick={this.handleChangeClick}
                />
                <div className='Product-block'
                     onClick={() => this.handleChangeClick('description', this.props.productQuery)}>
                    <div className="Product-card" >
                        <div className='Content'>

                            <ProductName name={this.props.name}
                                         brand={this.props.brand}
                            />
                            <ProductCost
                                currencyName={this.props.currencyName}
                                prices={this.props.prices}
                            />

                        </div>
                        <div className='Spacer-prod'/>
                        <ProductPic gallery={this.props.gallery}/>
                        <AttributeContainerInPLP
                            product={this.props.productQuery}
                            attributesInPLPActive={this.state.attributesInPLPActive}
                            choseProdInPLPClick={this.choseProdInPLPClick}
                            chosenItemDetailsContainer={this.chosenItemDetailsContainer}
                        />
                        <div className='Green-icon'
                            onClick={(event) =>  this.props.productQuery.attributes.length>0
                                ? this.choseProdInPLPClickEvent(event, this.state.attributesInPLPActive!==true)
                                : this.choseProdInPLPClickByGreen(event, [])}
                        >
                            <img alt="img" src={circleIcon} className='Green-icon-img'/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


class OutOfStock extends React.Component {

    render() {
        if (!this.props.productQuery.inStock)
            return (
            <div className='Out-of-stock-active'
                 onClick={() => this.props.handleChangeClick('description', this.props.productQuery)}

            >
                <div className='Out-of-stock-text'>OUT OF STOCK</div>
            </div>
        )
        return <div></div>


    }
}


export default Product