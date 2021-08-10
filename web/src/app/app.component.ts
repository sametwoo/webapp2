import { Component,OnInit } from '@angular/core';
import { Basic } from 'src/app/models/basic.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web';
	userId=1;
	user?: Basic;
	constructor(private dataService:DataService){}
	ngOnInit():void{
		this.getUserInfo();	
	}
	getUserInfo():void {
		this.dataService.applyGetBasic(this.userId)
		.subscribe(
			data=>{
				if(data===undefined) {
				}
				else {
					this.user=data[0];
				}
			},
			error=>{
				console.log(error);
			});
	}
}
