import { Component, ContentChild, ContentChildren, Directive, ElementRef, QueryList, Renderer2, ViewChild } from '@angular/core';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularProjections';

  @ViewChild('vwChild')vwChild:ElementRef;

  ngAfterViewInit(){
    console.log(this.vwChild);
  }
}

