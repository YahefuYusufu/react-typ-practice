const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

const orderCake = () => {
  return {
    type: "CAKE_ORDERED",
    payload: 1,
  }
}
const reStockCake = (qty = 1) => {
  return {
    type: "CAKE_RESTOCKED",
    payload: qty,
  }
}
const orderIceCream = (qty = 1) => {
  return {
    type: "ICECREAM_ORDERED",
    payload: qty,
  }
}
const reStoreIceCream = (qty = 1) => {
  return {
    type: "ICECREAM_RESTOCKED",
    payload: qty,
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 10,
// }
const cakeInitialState = {
  numOfCakes: 10,
}
const iceCreamInitialState = {
  numOfIceCream: 20,
}

// (prevState,action) =>newState

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    case "CAKE_RESTOCKED":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }

    default:
      return state
  }
}
const iceCreamreducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      }
    case "ICECREAM_RESTOCKED":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamreducer,
})

const store = createStore(rootReducer)
console.log("initialState", store.getState())

const unsubscribe = store.subscribe(() =>
  console.log("Update store", store.getState())
)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(reStockCake(3))
// store.dispatch(orderIceCream())
// store.dispatch(orderCake())
const actions = bindActionCreators(
  { orderCake, reStockCake, orderIceCream, reStoreIceCream },
  store.dispatch
)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.reStockCake()
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.reStoreIceCream
unsubscribe()
