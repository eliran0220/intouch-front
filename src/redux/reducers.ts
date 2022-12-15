const reducer = (state, action) =>{
    swtich(action.type) {
        case "LOGIN":
            return (
                ...state,
                  action.playload;
            )
            break;
        default:
            return state;    
    }
}

export const reducer;