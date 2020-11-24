import { UPDATE_PAGE_STATE } from "./actionTypes.js";

// update page state
export const actionUpdatePageState = ( pageState ) => {
    console.log('1', pageState);
    return ({
      type: UPDATE_PAGE_STATE,
      pageState: pageState,
    });
}  