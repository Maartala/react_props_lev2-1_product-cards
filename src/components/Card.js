const Card = (props) => {
    console.log(props);
    return (
        <div>
            <img src={props.bild} alt="random" />
            <h2>{props.headline}</h2>
            <p>{props.preis}</p>
            <button>Buy Now</button>
        </div>
    );
}

export default Card;