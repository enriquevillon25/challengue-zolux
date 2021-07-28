import axios from "axios";
import environment from "../config/api";


const rimacApi = axios.create({
    baseURL: environment.api.host,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    // timeout: 30000,
    // timeoutErrorMessage: 'Hubo un problema en la conexión por favor vuelva a intentarlo'
});

export default rimacApi