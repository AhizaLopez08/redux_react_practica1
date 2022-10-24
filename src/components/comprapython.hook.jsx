import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_python_action, return_python_action } from '../redux/actions/curseShopAction';

const CompraPYTHONHook = () => {

    const dispatch=useDispatch();

    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(buy_python_action(1));
            }}>Comprar Python</button>
            <br/>
            <button className= "btn btn-dark btn-sm" onClick={() => {
                dispatch(return_python_action(1));
            }}>Regresar Python</button>
        </div>
    );
}
export default CompraPYTHONHook;