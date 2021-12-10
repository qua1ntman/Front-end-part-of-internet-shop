import React from 'react'
import './Cart.css'
import ItemCostInCart from "./ItemCostInCart";
import {BtnSlider} from "./ButtonsInCart";

class ItemPhotoSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // slideIndex: 1,
            sliderData: this.props.pics
        }
    }

    // handleChangeSlideIndex = (idx) => {
    //     this.setState({
    //         slideIndex: idx
    //     })
    // }



    render() {

        let nextSlide = () => {
            if (this.props.slideIndex !== this.props.pics.length) {
                this.props.handleChangeSlideIndex(this.props.slideIndex + 1)
            } else if (this.props.slideIndex === this.props.pics.length) {
                this.props.handleChangeSlideIndex(1)
            }
        }

        let prevSlide = () => {
            if (this.props.slideIndex !== 1) {
                this.props.handleChangeSlideIndex(this.props.slideIndex - 1)
            } else if (this.props.slideIndex === 1) {
                this.props.handleChangeSlideIndex(this.props.pics.length)
            }
        }


        return (
            <div className='Pic-of-thing-cart'>
                    {this.props.pics.map((obj) => {
                        return (
                            <div
                                key={this.props.pics.indexOf(obj)}
                                className={this.props.slideIndex === this.props.pics.indexOf(obj) + 1 ? "slide active-anim" : "slide"}
                            >
                                <img
                                    alt={obj}
                                    className='Img-props'
                                    src={obj}
                                />
                            </div>
                        )
                    })}
                    <BtnSlider
                        moveSlide={nextSlide}
                        direction={"next"}
                        pics={this.props.pics}
                    />
                    <BtnSlider
                        moveSlide={prevSlide}
                        direction={"prev"}
                        pics={this.props.pics}
                    />


            </div>
        )
    }
}

class ItemTitle extends React.Component {

    render() {
        return (
            <>
                <h1 className='Choosing-thing-text-cart Brand-of-chosen-thing-cart'>{this.props.brand}</h1>
                <h1 className='Choosing-thing-text-cart Title-of-chosen-thing-cart'>{this.props.name}</h1>
            </>
        )
    }
}

class ItemPriceCart extends React.Component {


    render() {
        return (
            <div className='Cost-in-bag-block-cart'>
                <ItemCostInCart
                    currencyName={this.props.currencyName}
                    prices={this.props.prices}
                />
            </div>
        )
    }
}

class ThingCounter extends React.Component {

    render() {
        return (
            <h1 className='Numb-of-things'>{this.props.counter}
            </h1>
        )
    }
}

export {ItemPhotoSlider, ItemTitle, ItemPriceCart, ThingCounter}