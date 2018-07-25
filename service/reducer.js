import actiontype from './actiontype';
import serverDate from './../server/server' 
const initilalState = {
  page: 1,
  allData: serverDate[0],
  totalPage: 3
}

export function reducer (state= initilalState, action) {
  switch(action.type) {
    case actiontype.SUCCESS_PAGE_CHANGE:
    console.log('called here..', action)
      return ({
        ...state,
        page: action.payload,
        allData: serverDate[action.payload - 1]
      })
    default:
      return state;
  }
}