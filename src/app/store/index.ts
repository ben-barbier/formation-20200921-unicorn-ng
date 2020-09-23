export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';

import { CartDispatchers, CartSelectors, UnicornsDispatchers, UnicornsSelectors } from './services';

export const services = [CartDispatchers, CartSelectors, UnicornsDispatchers, UnicornsSelectors];
