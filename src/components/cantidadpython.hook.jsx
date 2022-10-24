import React from 'react';
import { useSelector } from 'react-redux';


const CantidadPYTHONHook = () => {
    const curse_shop = useSelector((state) => state.curse_shop)

    return (
        <React.Fragment>
            Cursos disponibles: {curse_shop.python}
        </React.Fragment>
    );
}

export default CantidadPYTHONHook;