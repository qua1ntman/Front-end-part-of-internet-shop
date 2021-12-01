import React from 'react'
import './DescriptionWindow.css'

class ButtonAdd extends React.Component {

    render() {
        if (this.props.cartButtonActive===false && this.props.inStock===true && this.props.product.attributes.length>0 ) {
            return (
                <div className='Add-to-cart-button-block Button-not-active'
                >
                    <div className='Add-to-cart-button'>ADD TO CART</div>
                </div>
            )
        } else if (this.props.inStock===false) {
            return (
                <div className='Add-to-cart-button-block Button-not-active'
                     onClick={this.props.handleChangeListAndDescriptionInDisc}
                >
                    <div className='Add-to-cart-button'>OUT OF STOCK</div>
                </div>
            )
        } else if (this.props.cartButtonActive===false && this.props.product.attributes.length===0 && this.props.inStock===true){
            return (
                <div className='Add-to-cart-button-block Button-active'
                     onClick={this.props.handleChangeListAndDescriptionInDisc}
                >
                    <div className='Add-to-cart-button'>ADD TO CART</div>
                </div>
            )
        } else {
            return (
                <div className='Add-to-cart-button-block Button-active'
                     onClick={this.props.handleChangeListAndDescriptionInDisc}
                >
                    <div className='Add-to-cart-button'>ADD TO CART</div>
                </div>
            )
        }
    }

}

export default ButtonAdd