import React from 'react';
import { useSelector } from 'react-redux';


const CantidadHTMLHook = () => {
    const curse_shop = useSelector((state) => state.curse_shop)

    return (
        <React.Fragment>
            Cursos disponibles: {curse_shop.html}
        </React.Fragment>
    );
}

export default CantidadHTMLHook;