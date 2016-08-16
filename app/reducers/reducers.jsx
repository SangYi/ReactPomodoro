var initialState = {
  countdownStatus: 'stopped',
  breakSession: 1,
  workSession: 1,
  breakCount: 60,
  workCount: 60,
  sessionType: 'work'
};

export var pomodoroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        countdownStatus: action.status
      };
    case 'SET_SESSION_WORK':
      return {
        ...state,
        sessionType: action.sessionType
      };
    case 'SET_TO_BREAK':
      return {
        ...state,
        sessionType: action.sessionType
      };
    case 'INCREMENT_BREAK_SESSION':
      return {
        ...state,
        breakSession: state.breakSession + 1
      };
    case 'DECREMENT_BREAK_SESSION':
      // if(state.breakSession>1){
      //   return {
      //     ...state,
      //     breakSession: state.breakSession - 1,
      //     breakCount: (state.breakSession - 1) * 60
      //   };
      // }else{
      //   return state;
      // }
      return {
        ...state,
        breakSession: state.breakSession - 1,
        breakCount: (state.breakSession - 1) * 60
      };
    case 'INCREMENT_WORK_SESSION':
      return {
        ...state,
        workSession: state.workSession + 1,
        workCount: (state.workSession + 1) * 60
      };
    case 'DECREMENT_WORK_SESSION':
      return {
        ...state,
        workSession: state.workSession - 1,
        workCount: (state.workSession - 1) * 60
      };
    case 'SET_BREAK_COUNT':
    return {
      ...state,
      breakCount: action.count
    }
      return state;
    case 'DECREMENT_BREAK_COUNT':
      return {
        ...state,
        breakCount: state.breakCount - 1
      };
    case 'SET_WORK_COUNT':
      return {
        ...state,
        workCount: action.count
      }
      return state;
    case 'DECREMENT_WORK_COUNT':
      return {
        ...state,
        workCount: state.workCount - 1
      };
    case 'RESET':
      return {
        ...state,
        breakSession: state.breakSession,
        workSession: state.workSession,
        breakCount: state.breakSession*60,
        workCount: state.workSession*60,
        sessionType: 'work'
      };
    default:
      return state

  };
};

// export var countdownStatusReducer = (state = 'stopped', action) => {
//   switch (action.type) {
//     case 'SET_STATUS':
//       return action.status;
//     default:
//       return state;
//   };
// };

// export var sessionTypeReducer = (state = 'work', action) => {
//   switch (action.type) {
//     case 'SET_SESSION_WORK':
//       return action.status;
//     case 'SET_TO_BREAK':
//       return action.status;
//     default:
//       return state;
//   };
// };

// export var breakSessionReducer = (state = 5, action) => {
//   switch (action.type) {
//     case 'INCREMENT_BREAK_SESSION':
//       return state + 1;
//     case 'DECREMENT_BREAK_SESSION':
//       return state - 1;
//     default:
//       return state;
//   };
// };

// export var workSessionReducer = (state = 25, action) => {
//   switch (action.type) {
//     case 'INCREMENT_WORK_SESSION':
//       return state + 1;
//     case 'DECREMENT_WORK_SESSION':
//       return state - 1;
//     default:
//       return state;
//   };
// };

// export var breakCountReducer = (state = 300, action) => {
//   switch (action.type) {
//     case 'SET_BREAK_COUNT':
//       //temp
//       return state;
//     case 'DECREMENT_BREAK_COUNT':
//       return state - 1;
//     default:
//       return state;
//
//   };
// };

// export var workCountReducer = (state = 1500, action) => {
//   switch (action.type) {
//     case 'SET_WORK_COUNT':
//       //temp
//       return state;
//     case 'DECREMENT_WORK_COUNT':
//       return state - 1;
//     default:
//       return state;
//
//   };
// };
