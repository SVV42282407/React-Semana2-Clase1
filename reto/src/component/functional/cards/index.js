import React from 'react'
import './index.css'
import PropTypes from "prop-types";

const Cards = (props) => {
    const { name,
        productDescription,
        url,
        additional,
        showAdditional} = props
    return (
        <div className="card-wrapper col-4">
            <img className="productPreview" src={url} alt={name}/>
            <h2>{name}</h2>
            <p className="justify-description">{productDescription}</p>
            {additional && (
                <button 
                    onClick={() => showAdditional(additional)}
                >
                    More info
                </button>
            )}
        </div>
    )
};

Cards.propTypes = {
    name: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    showAdditional: PropTypes.func.isRequired
}

Cards.defaultProps = {
    additional: {
        notes: 'No additional information'
    }
}

export default Cards;