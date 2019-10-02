export default function theme(state = "darkblue", action) {
  const {type, payload} = action;
  // console.log('action:', action);
  // console.log('type:', type);
  // console.log('payload:', payload);
  
  // switch (type) {
  //   case "CHANGE_THEME":
  //     return payload;
  //   default:
  //     return state;
  // }

  if (type === "CHANGE_THEME") {
    return payload;
  } else {
    return state;
  }
}