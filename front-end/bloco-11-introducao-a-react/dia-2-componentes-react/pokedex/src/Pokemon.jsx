import { Component } from 'react';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <div className="pokemon">
                <div className="info">
                    <h2>{name}</h2>
                    <p>{type}</p>
                    <p>{`${averageWeight.value}${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={name}></img>
            </div>
        );
    }
}

export default Pokemon;