import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department List</h2>
    <ul class="items" >
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
     </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit
{
  departments=[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"Mongodb"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(department)
  {
     this.router.navigate(['departments', department.id]);
  }
}
