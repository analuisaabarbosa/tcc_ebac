import http from "k6/http";
import { check } from "k6";
import Utils from "../utils/utils";

export default class Customers {
  list(token) {
    let response = http.get(`${Utils.getBaseUrl()}/customers`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }
    });

    check(response, {
      "Status code must be 200": (r) => r.status === 200,
    });
  }
}
