export var countdownStatusReducer = (state = 'stopped', action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.status;
    default:
      return state;
  };
};

export var sessionTypeReducer = (state = 'work', action) => {
  switch (action.type) {
    case 'SET_SESSION_WORK':
      return action.status;
    case 'SET_TO_BREAK':
      return action.status;
    default:
      return state;
  };
};

export var breakSessionReducer = (state = 5, action) => {
  switch (action.type) {
    case 'INCREMENT_BREAK_SESSION':
      return state + 1;
    case 'DECREMENT_BREAK_SESSION':
      return state - 1;
    default:
      return state;
  };
};

export var workSessionReducer = (state = 25, action) => {
  switch (action.type) {
    case 'INCREMENT_WORK_SESSION':
      return state + 1;
    case 'DECREMENT_WORK_SESSION':
      return state - 1;
    default:
      return state;
  };
};

export var breakCountReducer = (state = 300, action) => {
  switch (action.type) {
    case 'SET_BREAK_COUNT':
      //temp
      return state;
    case 'DECREMENT_BREAK_COUNT':
      return state - 1;
    default:
      return state;

  };
};

export var workCountReducer = (state = 1500, action) => {
  switch (action.type) {
    case 'SET_WORK_COUNT':
      //temp
      return state;
    case 'DECREMENT_WORK_COUNT':
      return state - 1;
    default:
      return state;

  };
};
