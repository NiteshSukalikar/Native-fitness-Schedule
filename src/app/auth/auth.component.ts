import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
    FormControl,
    FormGroup,
    RequiredValidator,
    Validators,
} from "@angular/forms";
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "@nativescript/core";

@Component({
    selector: "ns-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"],
    moduleId: module.id,
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    emailControlIsValid = true;
    passwordControlIsValid = true;
    isLogin = true;

    @ViewChild("emailEl") emailEl: ElementRef<TextField>;
    @ViewChild("passwordEl") passwordEl: ElementRef<TextField>;

    constructor(private router: RouterExtensions) {}

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, {
                updateOn: "blur",
                validators: [Validators.required, Validators.email],
            }),
            password: new FormControl(null, {
                updateOn: "blur",
                validators: [Validators.required, Validators.minLength(6)],
            }),
        });

        this.form.get("email").statusChanges.subscribe((data) => {
            this.emailControlIsValid = data === "VALID";
        });

        this.form.get("password").statusChanges.subscribe((data) => {
            this.passwordControlIsValid = data === "VALID";
        });
    }

    onSubmit() {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();

        if (!this.form.valid) {
            return;
        }

        const email = this.form.get("email").value;
        const password = this.form.get("password").value;
        console.log(email, password);
        this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.router.navigate(['/challenges']);

    }

    onDone() {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
    }

    onSwitch() {
        this.isLogin = !this.isLogin;
    }
}
