import React from "react";
import './Bag.css'

class MyBag extends React.Component {

    render() {
        let sum = 0
        this.props.chosenItems.map(item => sum += item.counter)
            if (sum===0) {
                return (
                    <div className='MyBag'>
                        <strong>My Bag is empty</strong>
                    </div>
                )
            }
            return (
                <div className='MyBag'>
                    <strong>My Bag</strong>, {sum} items
                </div>
        )
    }
}

export default MyBag