import Axios from "axios";

//public test
const BASE_URL = "https://localhost:7112";


export const createHeader = () => {

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return header;
};

export const authCreate = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 50,
  headers:createHeader(),
});

export const privateAccess = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 50,
  headers:createHeader(),
});
 