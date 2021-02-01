import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { isAndroid } from "@nativescript/core/platform";
import { Page } from "@nativescript/core/ui/page";
import { UiService } from "../../ui.service";

declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"],
    moduleId: module.id,
})
export class ActionBarComponent implements OnInit {
    @Input() title: string;
    @Input() showBackButton = true;
    @Input() hasMenu = true;

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private uiService: UiService
    ) {}

    ngOnInit() {}

    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }

    get android() {
        return isAndroid;
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    onToggleMenu() {
        this.uiService.toggleDrawer();
    }

    onLoadedActionBar() {
        if (isAndroid) {
          const androidToolbar = this.page.actionBar.nativeView;
          const backButton = androidToolbar.getNavigationIcon();
          let color = '#171717';
          if (this.hasMenu) {
            color = '#ffffff'
          }
          if (backButton) {
            backButton.setColorFilter(
              android.graphics.Color.parseColor(color),
              (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
            );
          }
        }
      }
}
