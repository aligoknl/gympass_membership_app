export const url = `${process.env.BASE_SERVER_URL}`;

let user = JSON.parse(localStorage.getItem("user"));
let token = null;

if (user != null) token = user.accessToken;

export const setHeaders = () => ({ Authorization: `Bearer: ${token}` });
