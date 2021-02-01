import { Day, Status } from "./day.model";

export class Challenge {
    constructor(
        public title: string,
        public description: string,
        public year: number,
        public month: number,
        private _days: Day[] = []
    ) {
        if (_days.length > 0) {
            return;
        }
        // this.currentYear = new Date().getFullYear();
        // this.currentMonth = new Date().getMonth();
        const dayInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i < dayInMonth; i++) {
            const date = new Date(year, month, i);
            const dayInWeek = date.getDay();
            _days.push({
                dayInMonth: i,
                dayInWeek: dayInWeek,
                date: date,
                status: Status.Open,
            });
        }
    }

    get currentDay() {
        return this._days.find((d) => d.dayInMonth === new Date().getDay());
    }

    get Day() {
        return [...this._days];
    }
}
