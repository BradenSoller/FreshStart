import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

 function* getAllItems() {
        try {
          const response = yield axios({
            method: "GET",
            url: "/api/Items/Items",
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

  export default function* ItemSaga() { 
   yield takeLatest("FETCH_ALL_ITEMS", getAllItems)

  }