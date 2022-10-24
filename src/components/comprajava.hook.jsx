import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_java_action, return_java_action } from '../redux/actions/curseShopAction';

const CompraJAVAHook = () => {

    const dispatch=useDispatch();

    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(buy_java_action(1));
            }}>Comprar Java</button>
            <br/>
            <button className= "btn btn-dark btn-sm" onClick={() => {
                dispatch(return_java_action(1));
            }}>Regresar Java</button>
        </div>
    );
}
export default CompraJAVAHook;