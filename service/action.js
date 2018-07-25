import actiontype from './actiontype'
export const requestPage = (page) => dispatch => {
  dispatch({
    type: actiontype.SUCCESS_PAGE_CHANGE,
    payload: page
  })
}