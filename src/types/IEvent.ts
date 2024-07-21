import IEntry from "./IEntry"

interface IEvent {
    _id : string,
    entries : IEntry[],
    leaderboard: IEntry[],
    startDate: Date,
    endDate: Date
}

export default IEvent;