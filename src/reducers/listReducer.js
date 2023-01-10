export default function reduceList (state = [], action) {
    switch(action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]
        case "DELETE_ITEM":
            return state.filter(item => item !== action.payload)
        case "CHANGE_CHECKED":
            return state.map(item=> {
                if (item.id === action.payload) {
                    item.done = !item.done
                }
                return item
            })
        default:
            return state
    }
}