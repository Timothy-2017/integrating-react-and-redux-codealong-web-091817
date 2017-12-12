// function changeCount(state = {
//   count: 0,
// }, action) {
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return { count: state.count + 1 };
//     default:
//       return state;
//   };
// };

// NEEDED TO EXPORT DEFAULT SO THAT INDEX.JS CAN ACCESS WHEN DECLARING THE STORE VARIABLE

export default function changeCount(state = {
  count: 0
}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  };
};
