export const updateStateHelper = (state: any, newState: any) =>
  [...Object.keys(state)].forEach((key) => (state[key] = newState[key]));
