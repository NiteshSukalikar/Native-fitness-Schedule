import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Challenge } from "./challenge.model";

@Injectable({
    providedIn: "root",
})
export class ChallengeService {
    private _currentChallenge = new BehaviorSubject<{}>(null);

    get currentChallenge(){
        return this._currentChallenge.asObservable();
        //since _currentChallenge is private property so u cannnot access from outside thts why getter
        //and .asObservable is for you cannot call .next from outside.
    }

    constructor() {}

    createNewChallenge(Title: string, Description: string) {
        const challenge = new Challenge(
            Title,
            Description,
            new Date().getFullYear(),
            new Date().getMonth()
        );
        this._currentChallenge.next(challenge);
    }
}
