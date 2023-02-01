
const reducer = (state = 10, action) => {
    switch(action.type){
        case 'PLUS': 
        return state + action.payload
        case 'MINUS': 
        return state - action.payload

        return state;
    }
}
export default reducer