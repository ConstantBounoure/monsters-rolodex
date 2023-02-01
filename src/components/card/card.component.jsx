import "./card.styles.css";

const Card = ({ title, subtitle, src, className }) => {
    return (
        <div className={`card-container ${className}`}>
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

// class Card extends Component {
//     constructor() {
//         super();
//     }

//     render() {
//         const { title, subtitle, src, className } = this.props;

//         return (
//             <div className={`card-container ${className}`}>
//                 <img src={src} alt={title} />
//                 <h2>{title}</h2>
//                 <p>{subtitle}</p>
//             </div>
//         );
//     }
// }

export default Card;
