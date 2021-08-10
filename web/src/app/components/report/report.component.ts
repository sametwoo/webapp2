import { Component, OnInit } from '@angular/core';
import { Approved } from 'src/app/models/approved.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

	approved?: Approved[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
		this.getApproved();
  }

	getApproved(): void {
		this.dataService.getApproved()
			.subscribe(
				data=> {
					this.approved=data;
				},
				error=>{
					console.log(error);
				});
	}

}
