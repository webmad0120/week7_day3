import React from 'react';

// Descomponer query strings
import queryString from 'query-string'





const UrlStuff = props => {

    console.log('Los URL Params son:', props.match.params)
    console.log('Los Query strings son:', props.location.search)


    const urlStrings = queryString.parse(props.location.search)
    console.log('Tras descomponerlos se quedan en:', urlStrings)



    return (
        <div>
            <h3>URL PARAMS:</h3>
            <p>Clothe: {props.match.params.clothe}</p>
            <p>Color: {props.match.params.color}</p>
            <hr></hr>
            <h3>Query strings</h3>
            <p>Precio: {urlStrings.precio}</p>
            <p>Tela: {urlStrings.tela}</p>
        </div>
    )
}

export default UrlStuff;