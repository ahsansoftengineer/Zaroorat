import { HttpErrorResponse } from "@angular/common/http";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { TreeviewItem } from "ngx-treeview";
import { throwError } from "rxjs";
import { IProductCategory } from "../models/interfaces/product-category.interface";

export class CustomMethods {
  public static defaultPath: string = "../../../../assets/img/";
  public static userPath: string = CustomMethods.defaultPath + "user/";
  public static userBanner: string = CustomMethods.defaultPath + "banner/";
  public static productImage: string = CustomMethods.defaultPath + "product/";
  public static galleryImage: string = CustomMethods.defaultPath + "gallery/";
  // Computing Duration Methods
  public static computeDuration(
    oldDate: string | Date = new Date("February 26, 2021 11:21:00")
  ): string {
    const cd: Date = new Date(); // Current Date
    let date = new Date(oldDate); // Essential Code
    // Today
    if (date.toDateString() === cd.toDateString()) {
      if (cd.getHours() === date.getHours()) {
        if (cd.getMinutes() === date.getMinutes()) {
          return cd.getSeconds() - date.getSeconds() + " Seconds ago";
        } else {
          return cd.getMinutes() - date.getMinutes() + " Minutes ago";
        }
      } else {
        return cd.getHours() - date.getHours() + " Hours ago";
      }
    }
    // Yesterday & Before Yesterday
    else if (
      date.getFullYear() === cd.getFullYear() &&
      date.getMonth() === cd.getMonth()
    ) {
      if (cd.getDate() - 1 === date.getDate()) {
        return " Yesterday " + date.toTimeString().slice(0, 9);
      } else {
        return new Date(date).toDateString() + " " + new Date(date).toTimeString().slice(0, 9);
      }
    } else {
      return new Date(date).toDateString() + " " + new Date(date).toTimeString().slice(0, 9);
    }
  }
  // Validator Closure anonymous Function inside another Function
  public static emailDomain(domainName: string = "pragimtech.com") {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const domain: string = email.substring(email.lastIndexOf("@") + 1);
      // Here we are checking two things
      // 1. email is blank means Validation Pass (No need to display message)
      // 2. domain match means Validation Pass (No need to display message)
      // Indicating No Error (Validation Pass)
      if (email === "" || domain.toLowerCase() === domainName.toLowerCase()) {
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
    const emailControl = groupControl.get("email");
    const confirmEmailControl = groupControl.get("confirmEmail");
    if (
      emailControl.value === confirmEmailControl.value ||
      confirmEmailControl.pristine
    ) {
      return null;
    } else {
      return { emailMisMatch: true };
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
  // Setting all Controls Blank Not in Use
  public static setAllControlBlank(group: FormGroup | FormArray): FormGroup {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];

      if (
        abstractControl instanceof FormGroup ||
        abstractControl instanceof FormArray
      ) {
        this.setAllControlBlank(abstractControl);
      } else {
        abstractControl.markAsDirty();
      }
    });
    return <FormGroup>group;
  }
  // Hiearchy Structure of Product Category
  public static startRecursiveFunction(
    productCategories: IProductCategory[]
  ): TreeviewItem[] {
    const productCategoryTreeView: TreeviewItem[] = [];
    productCategories
      .filter((x) => x.pId === null)
      .forEach((parentCategory) => {
        const parentTreeView = new TreeviewItem({
          value: parentCategory.id,
          text: parentCategory.category,
        });
        const childs = productCategories.filter(
          (x) => x.pId === parentCategory.id
        );
        if (childs) {
          this.repeatRecursiveFunction(
            childs,
            parentTreeView,
            productCategories
          );
        }
        productCategoryTreeView.push(parentTreeView);
      });
    return productCategoryTreeView;
  }
  // Recursive Function for
  public static repeatRecursiveFunction(
    childCategories: IProductCategory[],
    parentTree: TreeviewItem,
    productCategories: IProductCategory[]
  ) {
    childCategories.forEach((cc) => {
      const childTreeView = new TreeviewItem({
        value: cc.id,
        text: cc.category,
      });
      const childs = productCategories.filter((x) => x.pId === cc.id);
      if (childs) {
        this.repeatRecursiveFunction(childs, childTreeView, productCategories);
      }
      if (parentTree.children == undefined) {
        parentTree.children = [childTreeView];
      } else {
        parentTree.children.push(childTreeView);
      }
    });
  }
  // Recursive Function for Displaying the Parent Involve in One Child
}
