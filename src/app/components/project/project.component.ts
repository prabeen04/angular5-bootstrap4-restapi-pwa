import { Component, OnInit, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges {
  private myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: null,
      email: null,
      password: null,
    });
  }
  ngOnInit() {

  }
  ngOnChanges() {
  }
  send() {
    console.log(this.myForm.value);
  }
}
