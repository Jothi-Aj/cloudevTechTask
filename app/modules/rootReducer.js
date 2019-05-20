// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.

/**
 * Routing to be implemented
 */
import { combineReducers } from 'redux';

import getData from 'reducers/getData';

const allReducers = {
  getData,
};

const appReducer = combineReducers(allReducers);

export default appReducer;
