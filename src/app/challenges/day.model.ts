export enum Status {
    Open,
    Completed,
    Active,
}

export interface Day {
    dayInMonth: number;
    dayInWeek: number;
    date: Date;
    status: Status;
}
