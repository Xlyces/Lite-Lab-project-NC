import { CommonModule, NgForOf, NgIf } from "@angular/common";
import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { LucideAngularModule, X } from "lucide-angular";


@Component({
  selector: "app-landing",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PanelComponent,
    LucideAngularModule,
  ],
  templateUrl: "./landing.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class LandingComponent {
  icons = {
    x: X,
  };
  hideBar = false;
}
