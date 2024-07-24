import IEntry from "./IEntry"

interface IEvent {
    entries : IEntry[],
    leaderboard : IEntry[],
    startDate: Date,
    endDate: Date,
    voteLimit: number
}

export default IEvent;