import { Routes } from '@angular/router';
import { LandingComponent } from "./modules/landing/landing.component";
import { JosefComponent } from './modules/josef/josef.component';
import { ResultsComponent } from './modules/results/results.component';


export const routes: Routes = [
    { path: "landing", redirectTo: "/" },
    { path: "", component: LandingComponent },
    { path: "josef", component:JosefComponent},
    { path: "results", component:ResultsComponent}
];
