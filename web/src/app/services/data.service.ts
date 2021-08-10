import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Msg } from '../models/msg.model';
import { Basic } from '../models/basic.model';
import { Msgfull } from '../models/msgfull.model';
import { Approved } from '../models/approved.model';

const baseUrl='http://localhost:8080/api';
const userUrl=baseUrl+'/user';
const applyUrl=baseUrl+'/apply';
const checkUrl=baseUrl+'/check';
const passUrl=baseUrl+'/pass';
const denyUrl=baseUrl+'/deny';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

	applyGetBasic(userId: any): Observable<Basic[]> {
		return this.http.get<Basic[]>(`${userUrl}/${userId}`);
	}
	applyGetMsg(id: any): Observable<Msg[]> {
		return this.http.get<Msg[]>(`${applyUrl}/${id}`);
	}
	applyCreateMsg(userId: any, data: any): Observable<any> {
		return this.http.post(`${applyUrl}/${userId}`, data);
	}
	applyUpdateBasic(userId: any, data: any): Observable<any> {
		return this.http.put(`${userUrl}/${userId}`, data);
	}
	applyUpdateMsg(id: any, data: any): Observable<any> {
		return this.http.put(`${applyUrl}/${id}`, data);
	}
	getApproved(): Observable<Approved[]>{
		return this.http.get<Approved[]>(baseUrl+'/approved');
	}
	approveGetMsgfull(role: any, unit: any): Observable<Msgfull[]>{
		if(unit==0) {
			return this.http.get<Msgfull[]>(`${checkUrl}/${role}`);
		}
		else {
			return this.http.get<Msgfull[]>(`${checkUrl}/${role}/${unit}`);
		}
	}	
	approveAccept(role: any, data: any): Observable<any> {
		return this.http.post(`${passUrl}/${role}`,data);
	}
	approveDeny(role: any, data: any): Observable<any> {
		return this.http.post(`${denyUrl}/${role}`,data);
	}
}
