import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehical-add-edit',
  templateUrl: './vehical-add-edit.component.html'
})
export class VehicalAddEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  vehicalEditForm;
  newForm: boolean = false;
  imagePath: string;
  
  constructor() { }

  ngOnInit() {

  }

}
