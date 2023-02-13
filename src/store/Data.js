const SET_DATA = "SET_DATA";
const REMOVE_DATA = "REMOVE_DATA";


export const setInfo = (data) => {
    return ({
        type: SET_DATA,
        payload: data
    })
}

export const removeData = (data) => {
    return ({
        type: REMOVE_DATA,
        payload: data
    })
}


export default function dataReducer(state = {
    data: {}
},action) {
    const info = action.payload
switch (action.type) {
    case SET_DATA:{
        return{
            ...state,
            data:{
                ...state.data,
            info
            }
        }
    }

    default:
        return state
    
}
}