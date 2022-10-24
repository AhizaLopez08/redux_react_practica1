import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_html_action, return_html_action } from '../redux/actions/curseShopAction';

const CompraHTMLHook = () => {

    const dispatch=useDispatch();

    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(buy_html_action(1));
            }}>Comprar HTML</button>
            <br/>
            <button className= "btn btn-dark btn-sm" onClick={() => {
                dispatch(return_html_action(1));
            }}>Regresar HTML </button>
        </div>
    );
}
export default CompraHTMLHook;