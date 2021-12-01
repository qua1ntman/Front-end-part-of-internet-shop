import React from "react";
import './DescriptionWindow.css';
import DOMPurify from "dompurify";


class DescriptionText extends React.Component {
    render() {
        return (
            <div className='Description-text-container'>
                <div id='description' className='Description-text'
                     dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.description)}}
                >
                </div>
            </div>
        );
    }
}

export default DescriptionText
