import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { Subscription } from "rxjs";
import { UiService } from "./shared/ui.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    activeChallenge: string[] = [];
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;

    activechall = "";

    constructor(
        private uiService: UiService,
        private changeDetectorRef: ChangeDetectorRef,
        private vcRef: ViewContainerRef
    ) {}

    // onChallengeInput(desc) {
    //     this.activeChallenge.push(desc);
    // }

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe(() => {
            if (this.drawer) {
                this.drawerComponent.sideDrawer.toggleDrawerState();
            }
        });

        this.uiService.setRootVCRef(this.vcRef);
    }

    onLogout() {
        this.uiService.toggleDrawer();
    }

    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectorRef.detectChanges();
    }

    onChallengeInput(desc) {
        this.activechall = desc;
    }
}
