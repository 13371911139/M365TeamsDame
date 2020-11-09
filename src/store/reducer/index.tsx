import transferSource from './transferSource'

import { combineReducers } from 'redux';

export interface IStoreState {
    readonly transferSource: any;
}

export default combineReducers<IStoreState>({ transferSource});