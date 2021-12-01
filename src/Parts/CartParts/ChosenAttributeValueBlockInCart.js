import React from 'react'
import './Cart.css'
// import classNames from "classnames";


class ChosenAttributeValue extends React.Component {

    render() {
        // let color = classNames({
        //     "Color-Green": this.props.value === "Green",
        //     "Color-Cyan": this.props.value === "Cyan",
        //     "Color-Blue": this.props.value === "Blue",
        //     "Color-Black": this.props.value === "Black",
        //     "Color-White": this.props.value === "White",
        // })

        let color = `Color-${this.props.value}`

        if (this.props.name === 'Color')
            return (<div id={this.props.value}
                         className={`Attribute-value ${color} Color-block-cart`}
            >
                    </div>)
        return (
            <div id={this.props.value}
                 className='Attribute-value'>
                    <div className='Attribute-item-button'>{this.props.value}</div>
            </div>)
    }

}

export default ChosenAttributeValue