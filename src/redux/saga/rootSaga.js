const { watchUserSaga } = require("./userSaga")
import {all} from 'redux-saga/effects'

export default rootSaga = function*() {
    yield all ([watchUserSaga()])
}