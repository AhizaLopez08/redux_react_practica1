export const BUY_HTML='BUY_HTML';
export const RETURN_HTML= 'RETURN_HTML';

export const BUY_JAVA='BUY_JAVA';
export const RETURN_JAVA= 'RETURN_JAVA';

export const BUY_PYTHON='BUY_PYTHON';
export const RETURN_PYTHON= 'RETURN_PYTHON';

export const buy_html_action = (cant) => {
    return {
        type: BUY_HTML,
        payload: cant
    }
}
export const return_html_action = (cant) => {
    return{
        type: RETURN_HTML,
        payload: cant
    }
}

export const buy_java_action = (cant) => {
    return {
        type: BUY_JAVA,
        payload: cant
    }
}
export const return_java_action = (cant) => {
    return{
        type: RETURN_JAVA,
        payload: cant
    }
}

export const buy_python_action = (cant) => {
    return {
        type: BUY_PYTHON,
        payload: cant
    }
}
export const return_python_action = (cant) => {
    return{
        type: RETURN_PYTHON,
        payload: cant
    }
}