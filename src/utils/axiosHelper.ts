
import axios, { AxiosError, Method } from "axios";
import { baseUrl } from "./constants";
import AlertStore from "../store/AlertStore";

class AxiosHelper {
    async request(endpoint: string, method: Method, params : any = {}) {
        try {
            const result = await axios( {
                url: `${baseUrl}${endpoint}`,
                method,
                params
            })

            AlertStore.setAlert("Success!");

            return result.data;
        }

        catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                AlertStore.setAlert(axiosError.response?.data ? (axiosError.response.data as string) : axiosError.message ?? 'Unknown error', "error");
            }
        }
    }
}

export default new AxiosHelper();