import Cookies from "universal-cookie";
const cookies = new Cookies();

cookies.set("TOKEN", "hello", { path: "/" });

window.location.href = "/auth";
