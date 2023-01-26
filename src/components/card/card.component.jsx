import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
    constructor() {
        super();
    }

    render() {
        const { title, subtitle, src, className } = this.props;

        return (
            <div className={`card-container ${className}`}>
                <img src={src} alt={title} />
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        );
    }
}

export default Card;
