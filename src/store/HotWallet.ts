import { makeAutoObservable, runInAction } from "mobx"
import { HereWallet } from "@here-wallet/core";

class HotWallet {

    here : HereWallet | null = null;
    user : {nearAccountId : string} | null = null;

    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    init = async () => {

        const here = await HereWallet.connect({
            botId: "memewarss_bot/app", 
            walletId: "herewalletbot/beta",
        });
        
        if (await here.isSignedIn()) {
            const account = await here.getAccountId();
            runInAction(() => this.user = {nearAccountId: account });
        }

        runInAction(() => this.here = here);
    }

    login = () =>  {
        this?.here?.authenticate();
    }

    logout = () =>  {
        this?.here?.signOut();
        this.user = null
    }
}

export default new HotWallet();