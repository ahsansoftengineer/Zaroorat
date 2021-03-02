import { HttpErrorResponse } from "@angular/common/http";
import { AbstractControl } from "@angular/forms";
import { throwError } from "rxjs";

export  class CustomMethods {
  // Computing Duration Methods
  public static duration: string = '';
  static computeDuration(date: Date = new Date("February 26, 2021 11:21:00")): string {
    const cd: Date = new Date(); // Current Date
    // Today
    if (date.toDateString() === cd.toDateString()) {
      if (cd.getHours() === date.getHours()) {
        if (cd.getMinutes() === date.getMinutes()) {
          this.duration = cd.getSeconds() - date.getSeconds() + " Seconds ago";
        } else {
          this.duration = cd.getMinutes() - date.getMinutes() + " Minutes ago";
        }
      } else {
        this.duration = cd.getHours() - date.getHours() + " Hours ago";
      }
    }
    // Yesterday & Before Yesterday
    else if (
      date.getFullYear() === cd.getFullYear() &&
      date.getMonth() === cd.getMonth()
    ) {
      if (cd.getDate() - 1 === date.getDate()) {
        this.duration = " Yesterday " + date.toTimeString().slice(0, 9);
      } else {
        this.duration =
          date.toDateString() + " " + date.toTimeString().slice(0, 9);
      }
    } else {
      this.duration =
        date.toDateString() + " " + date.toTimeString().slice(0, 9);
    }
    return this.duration
  }
   // Validator Closure anonymous Function inside another Function
   public static emailDomain(domainName: string = 'pragimtech.com') {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const domain: string = email.substring(email.lastIndexOf('@') + 1);
      // Here we are checking two things
      // 1. email is blank means Validation Pass (No need to display message)
      // 2. domain match means Validation Pass (No need to display message)
      // Indicating No Error (Validation Pass)
      if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
        return null;
      }
      // Indicating (Validation Fails) (Display the Message)
      else {
        return { emailDomain: true };
      }
    };
  }
  // Validator Match Email
  public static matchEmail(
    groupControl: AbstractControl
  ): { [key: string]: any } | null {
    const emailControl = groupControl.get('email');
    const confirmEmailControl = groupControl.get('confirmEmail');
    if (emailControl.value === confirmEmailControl.value || confirmEmailControl.pristine) {
      return null;
    } else {
      return { 'emailMisMatch': true };
    }
  }
  // HTTP Error Handler
  public static handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error :", errorResponse.error.message);
    } else {
      console.error("Server Side Error :", errorResponse);
    }
    return throwError(
      "There is a problem with the service. We are notified & working on it. Please try again later."
    );
  }
}
