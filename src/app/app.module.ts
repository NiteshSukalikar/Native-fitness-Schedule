import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptFormsModule,
    NativeScriptModule,
} from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { AppRoutingModule } from "./app-routing.module";
import { DayModalComponent } from "./challenges/day-modal/day-modal.component";
import { SharedModule } from "./shared/shared.module";
import { ChallengeActionsModule } from "./challenges/challenge-actions/challenge-actions.module";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        ChallengeActionsModule,
        SharedModule,
    ],
    declarations: [AppComponent, AuthComponent, DayModalComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [DayModalComponent],
})
export class AppModule {}
