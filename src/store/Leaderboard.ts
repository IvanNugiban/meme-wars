

import axios, { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import IEvent from "../types/IEvent";
import { baseUrl } from "../utils/constants";

class Leaderboard {

    previousEvent: IEvent | null = null;
    error: unknown | undefined = undefined;
    fetched: boolean = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getPrevious() {
        this.isLoading = true;
        try {
            const result: AxiosResponse<IEvent> = await axios.get(`${baseUrl}/events/getPrevious`);
            runInAction(() => {
               this.previousEvent = result.data;
        })
        } catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                runInAction(() => this.error = typeof axiosError.response?.data === "string" ? (axiosError.response.data) : axiosError.message ?? 'Unknown error')
            }
            else { runInAction(() => {
                this.error = "Unknown error"
                this.fetched = true;
         } )};
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }
}

export default new Leaderboard();