import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/msg.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

	role=0;
	msg: Msg = {
		place: '',
		date0: '',
		date1: '',
		reason: '',
		state: this.role
	};
	userId=1;
	msgExists = false;
	stateMessage = '';
	stateType = 'alert alert-info';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
		this.prepareMsg(this.userId);
  }
	
	refreshStateMessage():void {
		if(Number(this.role) < Number(this.msg.state)) {
			if(this.msg.state==1) {
				this.stateMessage='boss1 is checking';
			}
			else if(this.msg.state==2) {
				this.stateMessage='boss2 is checking';
			}
			else if(this.msg.state==3) {
				this.stateMessage='boss3 is checking';
			}
			this.stateType='alert alert-info';
		}
		else if(this.role==this.msg.state) {
			this.stateMessage=this.msg.comment;
			this.stateType='alert alert-warning';
		}
	}

	prepareMsg(userid: number): void {
		this.dataService.applyGetMsg(userid)
			.subscribe(
				data=>{
					if(data.length===0) {
						this.msgExists=false;
					}
					else {
						this.msg=data[0];
						this.msgExists=true;
						this.refreshStateMessage();
					}
				},
				error=>{
					console.log(error);
				});
	}

	commitMsg(): void {
		this.msg.state=this.role+1;
		this.refreshStateMessage();
		if(this.msgExists===true) {
			this.dataService.applyUpdateMsg(this.msg.id, this.msg)
				.subscribe(
					resp=>{
						console.log(resp);
					},
					error=>{
						console.log(error);
					});
		}
		else {
			this.dataService.applyCreateMsg(this.userId, this.msg)
				.subscribe(
					resp=>{
						console.log(resp);
					},
					error=>{
						console.log(error);
					});
		}
	}
}
