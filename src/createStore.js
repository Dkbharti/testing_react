import {createStore, applyMiddleware} from 'redux'
import RootReducer from './reducers/index'
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk]

export const createStoreWithModdleWare=applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithModdleWare(RootReducer)