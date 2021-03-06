/**
 * App's Redux Reducers
 * --------------------
 *
 * here are listed all the reducers that will compose the state of the app.
 * if you want/need to disable a reducer just comment it out in the exported object.
 */

import { appReducer } from './app-reducer';
import { screenReducer } from './screen-reducer';
/* import new reducer */

export const reducers = {
    app: appReducer,
    screen: screenReducer,
    /* append new reducer */
};
