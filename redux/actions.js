// update page state
export const actionUpdatePageState = ( pageState ) => {
    return ({
      type: 'UPDATE_PAGE_STATE',
      pageState: pageState,
    });
}  