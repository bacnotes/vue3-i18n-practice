import axios from "axios";
const baseURL = "https://randomuser.me/api";
const axiosInstance = axios.create({
  baseURL,
});
export const apiHelper = axiosInstance;

import Swal from "sweetalert2";
export const Toast = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 2000,
});
