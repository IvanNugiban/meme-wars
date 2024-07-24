
import axios, { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { baseUrl } from "../utils/constants";
import HotWallet from "./HotWallet";


class Submit {

    isUserSubmited: boolean = false;
    fetched: boolean = false;
    error: string | null = null;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async userSumbited() {
        this.isLoading = true;
        try {
            const entries: AxiosResponse<boolean> = await axios.get(`${baseUrl}/entries/userSubmited`, {
                params: {
                    nearId: HotWallet.user?.nearAccountId
                }
            });
            runInAction(() => {
                this.isUserSubmited = entries.data;
            })
        } catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                runInAction(() => this.error =typeof axiosError.response?.data === "string" ? (axiosError.response.data) : axiosError.message ?? 'Unknown error')
            }
            else { runInAction(() => this.error = "Unknown error" )};
        } finally {
            runInAction(() => this.fetched = true);
            runInAction(() => this.isLoading = false)
        }
    }

    async uploadMeme(file: File) {
        this.isLoading = true;
        try {
            const formData = new FormData();
            formData.append('file', file);

            await axios({
                url: `${baseUrl}/entries/add`,
                method: "POST",
                data: formData,
                params: {
                    nearId: HotWallet.user?.nearAccountId
                }
              });

            runInAction(() => this.isUserSubmited = true);

        } catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError;
                runInAction(() => this.error = typeof axiosError.response?.data === "string"  ? (axiosError.response.data ) : axiosError.message ?? 'Unknown error')
            }
            else { runInAction(() => this.error = "Unknown error" )};
        } finally {
            runInAction(() => this.fetched = true);
            runInAction(() => this.isLoading = false)
        }
    }

}

export default new Submit();