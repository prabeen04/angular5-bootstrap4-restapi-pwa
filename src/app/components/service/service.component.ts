import { Component, OnInit } from '@angular/core';
import { CoteService } from '../../services/cote.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  data: any;

  constructor(private cote: CoteService) { }

  ngOnInit() {
    this.cote.getData().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      },
      (err) =>{
        console.log(err);
      }
    );
  }

}
