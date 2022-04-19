import { Component, OnInit, Input } from '@angular/core';
import { Med } from 'src/app/Med';

@Component({
  selector: 'app-med-item',
  templateUrl: './med-item.component.html',
  styleUrls: ['./med-item.component.scss']
})
export class MedItemComponent implements OnInit {
  @Input() med!: Med


  constructor() { }

  ngOnInit(): void {
  }

}
