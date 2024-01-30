import {legacy_createStore, combineReducers,applyMiddleware} from "redux"
// import thunk from "redux-thunk";
import {CategoryReducer} from './categories/reducer'

import {TenantReducer} from './Company/reducer'

const rootReducer= combineReducers({
    tenant: TenantReducer,
    categories: CategoryReducer
});

export const store= legacy_createStore(rootReducer)