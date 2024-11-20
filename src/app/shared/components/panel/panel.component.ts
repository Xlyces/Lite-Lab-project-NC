import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-panel",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./panel.component.html",
  styles: "",
})
export class PanelComponent {
  @Input() classes = "";
  @Input() type: "light" | "dark" | "black" | "custom" = "light";
}
