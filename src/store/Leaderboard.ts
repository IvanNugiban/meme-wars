

import {makeAutoObservable, runInAction} from "mobx";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../utils/constants";
import HotWallet from "./HotWallet";
import ILeaderboardItem from "../types/ILeaderboardItem";

class Leaderboard {

    items: ILeaderboardItem[] = [{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5},{nearId: "paveldurov.tg", image: "", reward: 5}, {nearId: "paveldurov.tg", image: "", reward: 5}];
    error: unknown | undefined = undefined;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetch() {
        this.isLoading = true;
        try {
            const entries: AxiosResponse<ILeaderboardItem[]> = await axios.get(`${baseUrl}/leaderboard/fetch`, {
                params: {
                  nearId: HotWallet.user?.nearAccountId
                }
            });
            runInAction(() => {
               this.items = entries.data;
        })
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }
}

export default new Leaderboard();