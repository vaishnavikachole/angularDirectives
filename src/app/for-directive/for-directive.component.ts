import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {
  title = 'angularDirectives';
  students : any = ['shivani','shweta','priya','rohan','priti']

}
