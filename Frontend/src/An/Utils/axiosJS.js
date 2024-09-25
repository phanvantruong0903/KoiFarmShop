import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:4000"
});
const logIn = (email, password) => {
    return axiosInstance.post("/users/login", { email, password });
}
const logOut = () => {
    return axiosInstance.post("/users/logout");
}
const register = (name, email, password,confirm_password, dateOfBirth) => {
    return axiosInstance.post("/users/register", { name, email, password, confirm_password, dateOfBirth });
}
export { logIn, logOut, register };