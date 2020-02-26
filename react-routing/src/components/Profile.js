
import React from 'react';

const profile = props => {
    return (
        <div>
            <h1>Soy el perfil de {props.user.username}</h1>
        </div>
    )
}

export default profile;