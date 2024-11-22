import { group, sleep } from "k6";
import Login from "../requests/login.request";
import data from "../data/users.json";
import Products from "../requests/products.request";

export const options = {
  stages: [
    { duration: '10s', target: 10},
    { duration: '5s', target: 50},
    { duration: '10s', target: 10},
    { duration: '5s', target: 0},
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  }
}

export default function () {
  let login = new Login();
  let products = new Products();

  group("Login", () => {
    login.acess(data.userOk.user, data.userOk.password);
  });

  let token = login.getToken();
  console.log(`Generated token: ${token}`); // Exibe o token gerado para verificação

  group("List products", () => {
    products.list(token); // Passa o token gerado
  });
}
