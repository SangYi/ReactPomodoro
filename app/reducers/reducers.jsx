var initialState = {
  countdownStatus: 'stopped',
  breakSession: 5,
  workSession: 25,
  breakCount: 300,
  workCount: 1500,
  sessionType: 'work'
};

export var pomodoroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTDOWN_STATUS':
      return {
        ...state,
        countdownStatus: action.status
      };
    case 'SET_SESSION_TYPE':
      return {
        ...state,
        sessionType: action.sessionType
      };
    case 'INCREMENT_BREAK_SESSION':
      return {
        ...state,
        breakSession: state.breakSession + 1,
        breakCount: (state.breakSession + 1) * 60
      };
    case 'DECREMENT_BREAK_SESSION':
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
