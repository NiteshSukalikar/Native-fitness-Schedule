import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule
} from "@nativescript/angular";
import { SharedModule } from "../../shared/shared.module";

import { ChallengeEditComponent } from "./challenge-edit.component";

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        // NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ChallengeEditComponent },
        ]),
        SharedModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeEditModule {}
