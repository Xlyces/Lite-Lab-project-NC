// src/app/services/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private answers: { selectedPIPL: string; selectedMLPS: string } = { selectedPIPL: '', selectedMLPS: '' };

  setAnswers(pipl: string, mlps: string) {
    this.answers.selectedPIPL = pipl;
    this.answers.selectedMLPS = mlps;
  }

  getAnswers() {
    return this.answers;
  }
}