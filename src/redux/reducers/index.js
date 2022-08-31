import selectCategorieReducer from "./categorie.reducer"
import listeExercisesReducer from "./exercices.reducer"
import { combineReducers } from "redux"

const reducers = combineReducers({
    categorieSelected : selectCategorieReducer,
    listeExercises : listeExercisesReducer
})

export default reducers