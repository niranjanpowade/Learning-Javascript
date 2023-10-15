// Redux Setup
const { createStore } = require("redux");

// Initial State
const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create a Redux Store
const store = createStore(counterReducer);

// Subscribe to Store Changes (for logging purposes)
store.subscribe(() => {
  console.log("Current State:", store.getState());
});

// Actions
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

// Dispatch Actions to Modify State
store.dispatch(incrementAction); // Increment the count
store.dispatch(incrementAction); // Increment again
store.dispatch(decrementAction); // Decrement the count

// Access State
console.log("Final State:", store.getState()); // Access the final state
