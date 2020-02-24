import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department List</h2>
    <ul class="items" >
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
     </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit
{
  
  public selectedId;
  departments=[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"Mongodb"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},
  ]
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit()
   {
    this.route.paramMap.subscribe((params: ParamMap) => 
    {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department)
  {
     this.router.navigate(['departments', department.id]);
  }
  
  isSelected(department)
  {
     return department.id === this.selectedId;
  }
}
