import {
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewContainerRef,
} from "@angular/core";
import { ModalDialogService, RouterExtensions } from "@nativescript/angular";
import { UiService } from "../../shared/ui.service";
import { DayModalComponent } from "../day-modal/day-modal.component";
import { ChallengeService } from "../challenge.service";
import { Challenge } from "../challenge.model";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-current-challenge",
    templateUrl: "./current-challenge.component.html",
    styleUrls: [
        "./_current-challenge.component.common.scss",
        "./current-challenge.component.android.scss",
        "./current-challenge.component.ios.scss",
    ],
    moduleId: module.id,
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {
    weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    currentChallenge: Challenge;
    private currentMonth: number;
    private currentYear: number;
    curChallengeSub: Subscription;

    constructor(
        private router: RouterExtensions,
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UiService,
        private challengeService: ChallengeService
    ) {}

    ngOnInit() {
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
            (data: any) => {
                this.currentChallenge = data;
            }
        );
    }

    getRow(index, day: { dayInMonth: number; dayInWeek: number }) {
        const startRow = 1;
        const weekRow = Math.floor(index / 7);

        const firstWeekDayOfMonth = new Date(
            this.currentYear,
            this.currentMonth,
            1
        ).getDay();

        const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    }

    onChangeStatus() {
        this.modalDialog
            .showModal(DayModalComponent, {
                fullscreen: true,
                viewContainerRef: this.uiService.getRootVCRef()
                    ? this.uiService.getRootVCRef()
                    : this.vcRef,
                context: {
                    date: new Date(),
                },
            })
            .then((data) => {
                console.log(data);
            });
    }

    ngOnDestroy() {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    }
}

// @Input() ChallengeTitle: string = '';
// @Input() Challenges: string[] = [];
// onItemTap(data: ItemEventData) {
//     console.log(data);
// }

// onEdit(){
//     this.router.navigate(['/challenges/edit'], {
//         transition: {
//             name:'slideLeft'
//         }
//     })
// }
