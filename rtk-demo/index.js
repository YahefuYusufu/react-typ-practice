const store = require("./app/store")
const cakeActions = require("./feature/cake/cakeSlice").cakeActions
const iceCreameActions =
  require("./feature/icecreame/IceCreameSlice").iceCreameActions
const fetchUsers = require("./feature/user/userSlice").fetchUsers

console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreameActions.ordered())
store.dispatch(iceCreameActions.ordered())
store.dispatch(iceCreameActions.ordered())
store.dispatch(iceCreameActions.restocked(2))

store.dispatch(fetchUsers())

unsubscribe()
