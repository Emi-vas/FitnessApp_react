
const categorie = (state = "", action) => {
    switch(action.type) {
        case "SELECT_CATEGORIE":
            return action.payload
        default:
            return state
    }
}

export default categorie