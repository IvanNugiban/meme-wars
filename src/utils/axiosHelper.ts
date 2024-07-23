
import axios, { AxiosError, Method } from "axios";
import { baseUrl } from "./constants";
import AlertStore from "../store/AlertStore";

class AxiosHelper {
    async request(endpoint: string, method: Method, params : any = {}, alert : boolean = true) {
        try {
            const result = await axios( {
                url: `${baseUrl}${endpoint}`,
                method,
                params
            })

            if (alert) AlertStore.setAlert("Success!");

            return result.data;
        }

        catch (e) {
            
            if (!alert) return;

            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                AlertStore.setAlert(typeof axiosError.response?.data === "string" ? (axiosError.response.data as string) : axiosError.message ?? 'Unknown error', "error");
            }

            else AlertStore.setAlert("Unknown error", "error");
        }
    }
}

export default new AxiosHelper();