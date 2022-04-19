import { Component, OnInit } from '@angular/core';
import { Med } from 'src/app/Med';
import { MEDS } from 'src/app/mock.meds';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.scss']
})
export class MedsComponent implements OnInit {
  meds: Med[] = MEDS


  constructor() { }

  ngOnInit(): void {
  }

}
