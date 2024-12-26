const { fetchedUsersSuccessfully, fetchUsersFailed, fetchUsers } = require("./userSlice")
import {call,put,takeLatest} from 'redux-saga/effects'
//function * () => generator function
//put yield watch latestmethod
//yield = to make api call
//put = to put data

const fetchUsersSaga = function* () {
    try {
        const response = yield call(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const response = await res.json()
            return response
        })
        yield put(fetchedUsersSuccessfully(response))

    }
    catch (err) {
        yield put(fetchUsersFailed(err.message))

    }
}

export const watchUserSaga = function*() {
    yield takeLatest(fetchUsers.type,fetchUsersSaga)

}