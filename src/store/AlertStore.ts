import { AlertColor } from "@mui/material";
import { makeAutoObservable, runInAction } from "mobx";

class AlertStore {
    message: string = "";
    severity: AlertColor = "success";
    timeout: number = 5000;

    constructor() {
        makeAutoObservable(this);
    }

    setAlert = (message: string, severity: AlertColor = "success",timeout: number = 3000) => {
        this.message = message;
        this.severity = severity;
        this.timeout = timeout;
    }

    closeAlert = () => {
        this.message = "";
    }
}

export default new AlertStore();