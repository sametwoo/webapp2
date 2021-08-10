import { Component, OnInit } from '@angular/core';
import { Basic } from 'src/app/models/basic.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {

	basic?: Basic;
	userId=1;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
		this.getBasic(this.userId);
  }

	getBasic(userid: number): void {
		this.dataService.applyGetBasic(userid)
			.subscribe(
				data=>{
					if(data===undefined) {
					}
					else {
						this.basic=data[0];
					}
				},
				error=>{
					console.log(error);
				});
	}

	updateBasic(userid: number): void {
		this.dataService.applyUpdateBasic(userid, this.basic)
			.subscribe(
				resp=>{
					console.log(resp);
				},
				error=>{
					console.log(error);
				});
	}

}
