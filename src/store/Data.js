import { omit } from "lodash";
const SET_DATA = "SET_DATA";
const REMOVE_DATA = "REMOVE_DATA";
const EDIT_DATA = "EDIT_DATA";

export const setInfo = (data) => {
    return ({
        type: SET_DATA,
        payload: data
    })
}
export const editInfoDetails = (data) => {
    console.log(data)
    return ({
        type: EDIT_DATA,
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
}, action) {
    const info = action.payload
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                data: {
                    ...state.data,
                    info
                }
            }

        }
        case REMOVE_DATA: {
            const { id } = action.payload
            return {
                ...state,
                data: {
                    ...state.data,
                    info: state.data.info.filter((item, index) => item.id !== id)
                }
            }
        }
        case EDIT_DATA: {
            const { id, name, email, role } = action.payload
            return {
                ...state,
                data: {
                    ...state.data,
                    info: state.data.info.map((item, index) => {
                        if (item.id == id) {
                            return {
                                ...item,
                                name,
                                email,
                                role
                            }
                        }
                        return item
                    })
                }
            }
        }

        default:
            return state

    }
}