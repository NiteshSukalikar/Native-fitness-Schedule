import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PageRoute } from "@nativescript/angular";

@Component({
    selector: "ns-challenge-edit",
    templateUrl: "./challenge-edit.component.html",
    styleUrls: ["./challenge-edit.component.scss"],
    moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
    isCreating = true;
    titleCtrl: NgModel;

    constructor(
        private activatedRoutes: ActivatedRoute,
        private pageRoute: PageRoute
    ) {}

    ngOnInit() {
        // this.activatedRoutes.params.subscribe((data) => {
        //     console.log(data.get('mode'));
        // });

        this.pageRoute.activatedRoute.subscribe((data) => {
            data.paramMap.subscribe((params) => {
                if (!params.has("mode")) {
                    this.isCreating = true;
                } else {
                    this.isCreating = params.get("mode") !== "edit";
                }
            });
        });
    }
}

// @Output() input = new EventEmitter();
// challengeDescription: string = "";
// onSet() {
//     // this.currentChallenge = this.challengeDescription;
//     this.input.emit(this.challengeDescription);
// }
