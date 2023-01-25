import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
    constructor() {
        super();
    }

    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const { id, name, email } = monster;
                    const src = `https://robohash.org/${id}?set=set2&size=180x180`;

                    return (
                        <Card
                            key={id}
                            src={src}
                            title={name}
                            subtitle={email}
                        />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
