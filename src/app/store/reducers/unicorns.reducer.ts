import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import * as UnicornsActions from '../actions/unicorns.actions';

export interface UnicornsState {
    unicorns: Unicorn[];
    loading: boolean;
    error: boolean;
}

export const initialState: UnicornsState = {
    unicorns: [],
    loading: false,
    error: false,
};

export const unicornsReducer = createReducer(
    initialState,
    on(UnicornsActions.deleteUnicorn, (state, { unicorn }) => ({
        unicorns: state.unicorns,
        loading: true,
        error: false,
    })),
    on(UnicornsActions.deleteUnicornSuccess, (state, { unicorn }) => ({
        unicorns: state.unicorns.filter(u => u.id !== unicorn.id),
        loading: false,
        error: false,
    })),
    on(UnicornsActions.loadUnicornsError, (state, { error }) => ({
        unicorns: state.unicorns,
        loading: false,
        error: true,
    })),
    on(UnicornsActions.loadUnicorns, state => ({
        unicorns: state.unicorns,
        loading: true,
        error: false,
    })),
    on(UnicornsActions.loadUnicornsSuccess, (state, { unicorns }) => ({
        unicorns,
        loading: false,
        error: false,
    })),
    on(UnicornsActions.loadUnicornsError, (state, { error }) => ({
        unicorns: state.unicorns,
        loading: false,
        error: true,
    })),
);
