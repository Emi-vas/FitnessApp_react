import selectCategorieReducer from "./categorie.reducer"
import { combineReducers } from "redux"

const reducers = combineReducers({
    categorieSelected : selectCategorieReducer
})

export default reducers