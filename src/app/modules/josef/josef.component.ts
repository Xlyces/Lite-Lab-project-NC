import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PanelComponent,
    FormsModule,
  ],
  templateUrl: "./josef.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class JosefComponent {
  selectedPIPL: string = 'PIPL-?'; // Default value for the first select
  selectedMLPS: string = 'MLPS'; // Default value for the second select

  constructor(private router: Router) {}

  saveAnswers() {
    console.log('Selected PIPL:', this.selectedPIPL);
    console.log('Selected MLPS:', this.selectedMLPS);
    
    // Navigate to the results page
    this.router.navigate(['/results'], {
      queryParams: {
        pipl: this.selectedPIPL,
        mlps: this.selectedMLPS
      }
    });
  }
}