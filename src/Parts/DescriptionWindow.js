import React from 'react';
import './DescriptionWindow/DescriptionWindow.css'
import DescriptionBlock from "./DescriptionWindow/DescriptionBlock";
import PhotosDescription from "./DescriptionWindow/PhotosDescription";
import {BackButton} from "./BagParts/Buttons";


class DescriptionWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenItemDetailsObj: {

            },

        }
    }

    chosenItemDetailsContainer = (attributes) => {
        this.setState({
            chosenItemDetailsObj : {
                id: this.props.product.name+','+attributes.map(item => item.value),
                counter: 1,
                name: this.props.product.name,
                brand: this.props.product.brand,
                pics: this.props.product.gallery,
                attributes: attributes,
                prices: this.props.product.prices
            }
        })
        setTimeout(() => {this.props.chosenItemsDetailsContainer(this.state.chosenItemDetailsObj);
        },100)
    }

    render() {
        if (this.props.whatListActive === 'description') return (
                <div className='Back-of-description-window'>
                    <div className='Descr-back-place'>
                        <BackButton
                            handleWindowChange={this.handleWindowChange}
                        />
                    </div>
                    <div className='Description-window'>
                        <PhotosDescription
                            gallery={this.props.product.gallery}
                        />
                        <DescriptionBlock
                            product={this.props.product}
                            currency={this.props.currency}
                            currencyName={this.props.currencyName}
                            pic={this.props.product.gallery[0]}
                            chosenItemDetailsContainer={this.chosenItemDetailsContainer}
                            handleWindowChange={this.props.handleWindowChange}
                        />


                    </div>
            </div>
        )
        else return (
            <div></div>
        )
    }
}

export {DescriptionWindow}