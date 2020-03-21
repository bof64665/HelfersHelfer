import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  need = 'Lebensmitteleinkauf'
  time = 'Montag 9 - 14 Uhr'

  constructor() { }

  ngOnInit(): void {
  }

}
