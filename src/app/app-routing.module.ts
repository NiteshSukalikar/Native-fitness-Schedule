import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { AuthComponent } from "./auth/auth.component";
import { ChallengesModule } from "./challenges/challenges.module";

const routes: Routes = [
    { path: "", component: AuthComponent },
    {
        path: "challenges",
        loadChildren: () => ChallengesModule,
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
