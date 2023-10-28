export let SERVER_BASE_URL = "http://localhost:8080";

if (process.env.NODE_ENV !== "development") {
  SERVER_BASE_URL = "CHANGE-THIS-STRING-WITH-URL-SERVER-IS-DEPLOYED-AT";
}
