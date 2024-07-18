
import {makeAutoObservable, runInAction} from "mobx";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../utils/constants";
import HotWallet from "./HotWallet";
import IEntry from "../types/IEntry";

class Entries {

    firstEntry: IEntry | null = null;
    secondEntry: IEntry | null = null;
    error: unknown | undefined = undefined;
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
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }
}

export default new Entries();