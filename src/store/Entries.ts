
import {makeAutoObservable, runInAction} from "mobx";
import axios, {AxiosError, AxiosResponse} from "axios";
import {baseUrl} from "../utils/constants";
import HotWallet from "./HotWallet";
import IEntry from "../types/IEntry";

class Entries {

    firstEntry: IEntry | null = null;
    secondEntry: IEntry | null = null;
    fetched: boolean = false;
    error:  string | null = null;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getPair() {
        this.isLoading = true;
        try {
            const entries: AxiosResponse<IEntry[]> = await axios.get(`${baseUrl}/entries/getPair`, {
                params: {
                  nearId: HotWallet.user?.nearAccountId
                }
            });
            runInAction(() => {
                this.firstEntry = entries.data[0];
                this.secondEntry = entries.data[1];
        })
        } catch (e ) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                runInAction(() => this.error = typeof axiosError.response?.data === "string" ? (axiosError.response.data) : axiosError.message ?? 'Unknown error')
            }
            else { runInAction(() => this.error = "Unknown error" )};
        } finally {
            runInAction(() => this.isLoading = false)
            runInAction(() => this.fetched = true)
        }
    }
}

export default new Entries();