// update page state
export const actionUpdatePageState = ( pageState ) => {
    console.log('1');
    return ({
      type: 'UPDATE_PAGE_STATE',
      pageState: pageState,
    });
}  