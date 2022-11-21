const redux = require("redux")
const produce = require("immer").produce
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

const initialState = {
  name: "PRG",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
}

const STREET_UPDATE = "STREET_UPDATE"
const CITY_UPDATE = "CITY_UPDATE"
const STATE_UPDATE = "STATE_UPDATE"
const updateStreet = (street) => {
  return {
    type: "STREET_UPDATE",
    payload: street,
  }
}
const updateCity = (city) => {
  return {
    type: "CITY_UPDATE",
    payload: city,
  }
}

const updateState = (state) => {
  return {
    type: "STATE_UPDATE",
    payload: state,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STREET_UPDATE":
      //   return {
      //     ...state,
      //     address: {
      //       ...state.street,
      //       street: action.payload,
      //     },
      //   }
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    case "CITY_UPDATE":
      return produce(state, (draft) => {
        draft.address.city = action.payload
      })
    case "STATE_UPDATE":
      return produce(state, (draft) => {
        draft.address.state = action.payload
      })
    default: {
      return state
    }
  }
}

const store = redux.createStore(reducer, applyMiddleware(logger))
console.log("initialState", store.getState())

const unsubscribe = store.subscribe(() => {})

const actions = bindActionCreators(
  { updateStreet, updateCity, updateState },
  store.dispatch
)

// store.dispatch(updateStreet("stenbockgatan 18_C"))
// store.dispatch(updateCity("Komul"))
// store.dispatch(updateState("Skane"))

actions.updateStreet("stenbockgatan 18C")
actions.updateCity("Komul")
actions.updateState("skane")
unsubscribe()
