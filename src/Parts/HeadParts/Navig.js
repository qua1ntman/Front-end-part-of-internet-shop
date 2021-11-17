import React from 'react';
import './Head.css';
import NavidButton from "./NavidButton";

class Navig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryButton: [
                'tech', 'clothes'
            ],

        }
    }

    handleChangeCategory = (item) => {
        this.props.handleChangeCategory(item)
    }

    handleWindowChange = (active) => {
        this.props.handleWindowChange(active)
    }

    render() {
        return (
            <div className="Navig">
                <NavidButton
                    techPageActive={this.props.techPageActive}
                    categoryButton={this.state.categoryButton}
                    categoryActive={this.props.categoryActive}
                    handleChangeCategory={this.handleChangeCategory}
                    handleWindowChange={this.handleWindowChange}
                />

            </div>
        )
    }
}





export default Navig