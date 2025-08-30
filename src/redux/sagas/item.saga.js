import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

 function* getAllItems() {
        try {
          const response = yield axios({
            method: "GET",
            url: "/api/Item/Item",
          });
          yield put({
            type: "SET_ITEMS",
            payload: response.data
          });
          console.log("All items fetched successfully:", response.data);
          
        } catch (error) {
          console.log("Unable to get pending events from server", error);
        }

 }


 function* postItem(action) {
  console.log("boo", action.payload);
  try {
    const headers = {
      "content-type": "multipart/form-data",
    };
    const response = yield axios({
      method: "POST",
      url: "/api/Item",
      headers: headers,
      data: action.payload,
    });
    yield put({
      type: "FETCH_ALL_ITEMS",
    });

  }
  catch (error) {
      console.error('Shelf POST failed:', error)
  }
}

  export default function* ItemSaga() { 
    yield takeLatest("FETCH_ALL_ITEMS", getAllItems),
    yield takeLatest("FETCH_NEW_ITEMS", postItem)
  }