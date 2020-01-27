import { ApiResponse } from '../models/api.response';
import { Observable } from 'rxjs';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/v1/event';



  getDealLoss(eventId: number): Observable<ApiResponse> {
    console.log(eventId);
    return this.http.get<ApiResponse>(`${this.baseUrl}/${eventId}`);
  }

}