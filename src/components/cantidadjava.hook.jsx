import React from 'react';
import { useSelector } from 'react-redux';


const CantidadJAVAHook = () => {
    const curse_shop = useSelector((state) => state.curse_shop)

    return (
        <React.Fragment>
            Cursos disponibles: {curse_shop.java}
        </React.Fragment>
    );
}

export default CantidadJAVAHook;