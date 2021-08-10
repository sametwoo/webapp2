import { Component, OnInit } from '@angular/core';
import { Msgfull } from 'src/app/models/msgfull.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

	msgfull?: Msgfull[];
	role=1;
	unit=0;

  constructor(
		private dataService:DataService,
		private route: ActivatedRoute,
		private router: Router) { }

  ngOnInit(): void {
		if(this.route.snapshot.params.role!==undefined)
			this.role=this.route.snapshot.params.role;
		if(this.route.snapshot.params.unit!==undefined)
			this.unit=this.route.snapshot.params.unit;	
		this.genCheckList();
  }

	genCheckList(): void {
		this.dataService.approveGetMsgfull(this.role, this.unit)
			.subscribe(
				data=>{
					this.msgfull=data;
				},
				error=>{
					console.log(error);
				});
	}
	acceptApplication(m:Msgfull, i:number): void{
		this.dataService.approveAccept(this.role, m)
			.subscribe(
				resp=>{
					this.genCheckList();
					console.log(resp);
				},
				error=>{
					console.log(error);
				});
	}
	denyApplication(m:Msgfull, i:number): void{
		this.dataService.approveDeny(this.role, m)
			.subscribe(
				resp=>{
					this.genCheckList();
					console.log(resp);
				},
				error=>{
					console.log(error);
				});
	}
}
