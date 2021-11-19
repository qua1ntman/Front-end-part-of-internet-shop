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


    render() {
        return (
            <div className="Navig">
                <NavidButton
                    techPageActive={this.props.techPageActive}
                    categoryButton={this.state.categoryButton}
                    categoryActive={this.props.categoryActive}
                    handleChangeCategory={this.props.handleChangeCategory}
                    handleWindowChange={this.props.handleWindowChange}
                />

            </div>
        )
    }
}





export default Navig