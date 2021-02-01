import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "ns-challenge-actions",
    templateUrl: "./challenge-actions.component.html",
    styleUrls: ["./challenge-actions.component.scss"],
    moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit {
    @Output() actionSelect = new EventEmitter();
    @Input() cancelText = 'Cancel';
    constructor() {}

    ngOnInit() {}

    onAction(Actions) {
        this.actionSelect.emit(Actions);
    }
}
