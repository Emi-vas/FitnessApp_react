const exercisesReducer = (state = [], action) => {
    switch(action.type) {
        case "LISTE_EXERCISES":
            return action.payload
        default: 
            return state
    }
}

export default exercisesReducer;