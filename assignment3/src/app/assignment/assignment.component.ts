import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  show = false;
  log = [];

  onToggledButton() {
    this.show = !this.show;
    this.log.push(Date());
  }

  constructor() {

   }

  ngOnInit() {
  }

}
