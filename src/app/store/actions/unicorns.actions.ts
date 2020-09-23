import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

// 🎯 loadUnicorns
export const loadUnicorns = createAction('[Unicorn] LOAD');
export const loadUnicornsSuccess = createAction('[Unicorn] LOAD_SUCCESS', props<{ unicorns: Unicorn[] }>());
export const loadUnicornsError = createAction('[Unicorn] LOAD_ERROR', props<{ error: any }>());

// 🎯 deleteUnicorn
export const deleteUnicorn = createAction('[Unicorn] DELETE', props<{ unicorn: Unicorn }>());
export const deleteUnicornSuccess = createAction('[Unicorn] DELETE_SUCCESS', props<{ unicorn: Unicorn }>());
export const deleteUnicornError = createAction('[Unicorn] DELETE_ERROR', props<{ error: any }>());
