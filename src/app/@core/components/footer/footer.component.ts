import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="socials">
      <a href="https://github.com/bof64665/HelfersHelfer" target="_blank" class="ion ion-social-github">
        <nb-icon icon="github-outline"></nb-icon>
      </a>
      <a href="https://devpost.com/software/040_medizinischespersonal_helfershelfer" target="_blank" class="ion ion-social-facebook">
        <nb-icon icon="activity-outline"></nb-icon>
      </a>
    </div>
    <span class="created-by">
      Created with <nb-icon icon="heart-outline"></nb-icon> by <b><a href="https://www.uni-regensburg.de/wirtschaftswissenschaften/wi-pernul/" target="_blank">IFS Team</a></b> at <b><a href="https://wirvsvirushackathon.org/" target="_blank">WirVsVirus Hackathon</a></b> 2020
    </span>
    <span class="created-by">
      #StayAtHome #WirVsVirusHack
    </span>
  `,
})
export class FooterComponent { }
