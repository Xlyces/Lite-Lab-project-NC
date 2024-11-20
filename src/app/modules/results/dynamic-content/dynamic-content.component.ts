import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ["../../../../styles.scss"], // Adjust the path if necessary
})
export class DynamicContentComponent {
  @Input() selectedPIPL: string | null = null;
  @Input() selectedMLPS: string | null = null;

  private piplContentMap: { [key: string]: string } = {
    'Government Assessed': `
      <p >According to the test, you have exceeded the threshold of data transfers for self-assessed compliance with the Personal Information Protection Laws. As a result, you will need to pass a Security Assessment organized by special bodies approved by the Cyberspace Administration of China (CAC) for a “Personal Information Protection Certificate” (PIPIC) in order to continue your operations..</p>
      <h3 class="text-gradient-diagonal pt-5 pb-5">The Security Assessment</h3>
      <p>Stuff about the asssessment </p>
    `,
    'Self Assessed': `
      <p>According to the test, you are subject to self regulated compliance over the provisions of the PIPL. You are not required to undergo a government assessment, as you have not yet reached the minimum data transfer threshold that mandates a government assessment.</p>
      <h3 class="text-gradient-diagonal pt-5 pb-5">Note:</h3>
      <p>When you eventually reach the threshold of data transfer, you must obtain a Personal Information Protection Certificate (PIPC) before you are allowed to further transfer data. The PIPC is issued only upon passing a government assessment organized by a special body approved by state governments and the Cyberspace Administration of China (CAC).</p>
    `
  };

  private mlpsContentMap: { [key: string]: string } = {
    '1': `
      <p>According to the test, the nature of your data may fall under Level 1 of the MLPS. This entails that the data you transfer, if leaked, will threaten the legal rights of some citizens or legal entities of China, but will not affect social order or public interests in anyway. </p>

      
    `,
    '2': `
      <p>According to the test, the nature of your data may fall under Level 2 of the MLPS. This entails that the data you transfer, if leaked, will threaten the legal rights of certain people and legal entities of China, and also cause some minimal disruption to public interests or social order. </p>
    `,
    '3': `
      <p>According to the test, the nature of your data may fall under Level 3 of the MLPS. This entails that the data you transfer, if leaked, will threaten the legal rights of certain people and legal entitites of China, but also potentially threaten public interests and social order to some degree.</p>
    `,
    '4 or 5': `
      <p>According to the test, the nature of your data may fall under Level 4 or 5 of the MLPS. This entails that the data you transfer, if leaked, could seriously the legal rights of certain individuals and legal entities, and also threaten public interests and social order to a notable or even a significant degree. </p>
    `,
  };

  get piplContent(): string {
    // Safely access piplContentMap with a fallback
    return this.selectedPIPL && this.piplContentMap[this.selectedPIPL] 
      ? this.piplContentMap[this.selectedPIPL] 
      : '<p>No specific content for this PIPL.</p>';
  }

  get mlpsContent(): string {
    // Safely access mlpsContentMap with a fallback
    return this.selectedMLPS && this.mlpsContentMap[this.selectedMLPS] 
      ? this.mlpsContentMap[this.selectedMLPS] 
      : '<p>No specific content for this MLPS.</p>';
  }

  get combinedContent(): string {
    // Provide a message based on selected values
    return this.selectedPIPL && this.selectedMLPS
      ? `<p>You have selected:</p><p>PIPL: ${this.selectedPIPL}, MLPS: ${this.selectedMLPS}</p>`
      : '<p>Please select both PIPL and MLPS to see combined content.</p>';
  }
}
