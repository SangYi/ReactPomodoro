export var setStatusStart = (status) => {
  return {
    type: 'SET_STATUS_START',
    status
  };
};

export var setStatusStop = (status) => {
  return {
    type: 'SET_STATUS_STOP',
    status
  };
};

export var setStatusPause = (status) => {
  return {
    type: 'SET_STATUS_PAUSE',
    status
  };
};

export var setSessionWork = (sessionType) => {
  return {
    type: 'SET_SESSION_WORK',
    sessionType
  };
};

export var setSessionBreak = (sessionType) => {
  return {
    type: 'SET_SESSION_BREAK',
    sessionType
  };
};

export var incrementWorkSession = () => {
  return {
    type: 'INCREMENT_WORK_SESSION'
  };
};

export var decrementWorkSession = () => {
  return {
    type: 'DECREMENT_WORK_SESSION'
  };
};

export var incrementBreakSession = () => {
  return {
    type: 'INCREMENT_BREAK_SESSION'
  };
};

export var decrementBreakSession = () => {
  return {
    type: 'DECREMENT_BREAK_SESSION'
  };
};

export var setWorkCount = (mintues) => {
  return {
    type: 'SET_WORK_COUNT',
    count: mintues*60
  };
};

export var decrementWorkCount = () => {
  return {
    type: 'DECREMENT_WORK_COUNT'
  };
};

export var setBreakCount = (mintues) => {
  return {
    type: 'SET_BREAK_COUNT',
    count: mintues*60
  };
};

export var decrementBreakCount = () => {
  return {
    type: 'DECREMENT_BREAK_COUNT'
  };
};
