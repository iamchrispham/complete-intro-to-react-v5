export default function location(state = "Los Angeles, CA", action) {
  // const {type, payload} = action;
  
  // switch (type) {
  //   case "CHANGE_LOCATION":
  //     return payload;
  //   default:
  //     return state;
  // }
  if (action.type === 'CHANGE_LOCATION') {
    return action.payload;
  } else{
    return state;
  }
}