import { BUY_HTML, RETURN_HTML, BUY_JAVA,RETURN_JAVA, BUY_PYTHON, RETURN_PYTHON } from "../actions/curseShopAction";


const default_curse_shop = {
    html: 20,
    java: 30,
    python: 20
};

const curse_shop = (state = default_curse_shop, action) => {
    switch(action.type) {
        case BUY_HTML: {
            return {
                ...state,
                html: state.html - action.payload
            }
        }
        case RETURN_HTML:{
            return {
                ...state,
                html: state.html + action.payload
            }
        }
        case BUY_JAVA: {
            return {
                ...state,
                java: state.java - action.payload
            }
        }
        case RETURN_JAVA:{
            return {
                ...state,
                java: state.java + action.payload
            }
        }
        case BUY_PYTHON: {
            return {
                ...state,
                python: state.python - action.payload
            }
        }
        case RETURN_PYTHON:{
            return {
                ...state,
                python: state.python + action.payload
            }
        }
        default: return state;
    }
}
export default curse_shop;