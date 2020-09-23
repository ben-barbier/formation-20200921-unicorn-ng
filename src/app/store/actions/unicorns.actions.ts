import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const deleteUnicorn = createAction('[Unicorn] DELETE', props<{ unicorn: Unicorn }>());
