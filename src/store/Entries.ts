
import { makeAutoObservable, runInAction } from "mobx";
import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrl } from "../utils/constants";
import HotWallet from "./HotWallet";
import IEntry from "../types/IEntry";

class Entries {

    firstEntry: IEntry | null = null;
    secondEntry: IEntry | null = null;
    userVoted : number  = 0;
    fetched: boolean = false;
    error: string | null = null;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getPair() {
        this.isLoading = true;
        try {
            const entries: AxiosResponse<{ firstEntry: IEntry, secondEntry: IEntry, userVoted: number }> = await axios.get(`${baseUrl}/entries/getPair`, {
                params: {
                    nearId: HotWallet.user?.nearAccountId
                }
            });
            runInAction(() => {
                this.firstEntry = entries.data.firstEntry;
                this.secondEntry = entries.data.secondEntry;
                this.userVoted = entries.data.userVoted;
            })
        } catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                runInAction(() => this.error = typeof axiosError.response?.data === "string" ? (axiosError.response.data) : axiosError.message ?? 'Unknown error')
            }
            else { runInAction(() => this.error = "Unknown error") };
        } finally {
            runInAction(() => this.isLoading = false)
            runInAction(() => this.fetched = true)
        }
    }

    async vote(firstEntryWinner: boolean) {

        if (!this.firstEntry || !this.secondEntry) return;

        this.isLoading = true;

        try {

            await axios.put(`${baseUrl}/entries/vote`, {
                winner: firstEntryWinner ? this.firstEntry.nearId : this.secondEntry.nearId,
                loser: firstEntryWinner ? this.secondEntry.nearId : this.firstEntry.nearId
            }, {
                params: {
                    nearId: HotWallet.user?.nearAccountId
                }
            });

            await this.getPair();

        } catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                runInAction(() => this.error = typeof axiosError.response?.data === "string" ? (axiosError.response.data) : axiosError.message ?? 'Unknown error')
            }
            else { runInAction(() => this.error = "Unknown error") };
        } finally {
            runInAction(() => this.isLoading = false)
            runInAction(() => this.fetched = true)
        }
    }
}

export default new Entries();