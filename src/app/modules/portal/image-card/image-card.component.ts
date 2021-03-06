import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.scss"],
})
export class ImageCardComponent implements OnInit {
  @Input()
  image: string = "";
  @Input()
  fileName: string = "";
  @Output()
  fileName_File = new EventEmitter<{ name: string; file: string }>();

  constructor() {}

  ngOnInit(): void {}
  onFileChange(event): any {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileName = event.target.files[0].name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result as string;
        this.fileName_File.emit({ name: this.fileName, file: this.image });
      };
    } else {
      this.fileName = "";
      this.image = "";
    }
  }
}
