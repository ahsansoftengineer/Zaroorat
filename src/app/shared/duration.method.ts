import { AbstractControl } from '@angular/forms';

export class CustomMethods {
  // Computing Duration Methods
    public duration: string;
        static computeDuration(date: Date = new Date('February 26, 2021 11:21:00')) {
          const cd: Date = new Date(); // Current Date
          this.myForm.patchValue({
            results: this.duration
          });
          // Today
          if (date.toDateString() === cd.toDateString()) {
            if (cd.getHours() === date.getHours()) {
              if (cd.getMinutes() === date.getMinutes()) {
                this.duration = cd.getSeconds() - date.getSeconds() + ' Seconds ago';
              } else {
                this.duration = cd.getMinutes() - date.getMinutes() + ' Minutes ago';
              }
            } else {
              this.duration = cd.getHours() - date.getHours() + ' Hours ago';
            }
          }
          // Yesterday & Before Yesterday
          else if (
            date.getFullYear() === cd.getFullYear() &&
            date.getMonth() === cd.getMonth()
          ) {
            if((cd.getDate() -1) === date.getDate()){
              this.duration = ' Yesterday ' + date.toTimeString().slice(0, 9);

            }else{
              this.duration = date.toDateString() + ' ' + date.toTimeString().slice(0, 9);
            }
          }else{
            this.duration = date.toDateString() + ' ' + date.toTimeString().slice(0, 9);
          }
        }
}



        