import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
// Adjust import path accordingly
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "app-results",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PanelComponent,
    SharedModule
  ],
  templateUrl: "./results.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class ResultsComponent implements OnInit {
  gridContent: string = ''; // Initialize empty content
  selectedGrid: number = 1;  // Default to grid 1
  selectedPIPL: string | null = null; // To hold the selected PIPL value
  selectedMLPS: string | null = null; // To hold the selected MLPS value
  dynamicContent1: string = ''; // For first dynamic content
  dynamicContent2: string = ''; // For second dynamic content

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    // Get selected values from route params or shared service
    this.route.queryParams.subscribe(params => {
      this.selectedPIPL = params['pipl'];
      this.selectedMLPS = params['mlps'];
    });

    // Alternatively, if using a shared service:
    // const answers = this.dataService.getAnswers();
    // this.selectedPIPL = answers.selectedPIPL;
    // this.selectedMLPS = answers.selectedMLPS;

    // Set dynamic content based on selected values
    this.setDynamicContent();
    this.changeContent(this.selectedGrid); // Set default content on load
  }

  setDynamicContent() {
    // Set dynamic content based on selectedPIPL and selectedMLPS
    this.dynamicContent1 = `${this.selectedPIPL}`; // Use 'N/A' if no value
    this.dynamicContent2 = `Lv. ${this.selectedMLPS}`; // Use 'N/A' if no value
  }

  // Method to change content based on the grid clicked
  changeContent(gridNumber: number) {
    this.selectedGrid = gridNumber; // Update the selected grid
    switch (gridNumber) {
      case 1:
        this.gridContent = 'A';  // Content for grid-1
        break;
      case 2:
        this.gridContent = 'B';  // Content for grid-2
        break;
      case 3:
        this.gridContent = 'C';  // Content for grid-3
        break;
      default:
        this.gridContent = 'A';  // Fallback to grid 1 content
    }
  }
}