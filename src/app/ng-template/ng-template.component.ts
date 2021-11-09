import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  constructor() { }

  @Input() templateFromParent:TemplateRef<any>;
  public data:string="good morning";

  ngOnInit() {
  }

}
