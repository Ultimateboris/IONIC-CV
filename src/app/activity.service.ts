import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient:HttpClient) { }
  getActivity()
  {}
  getActivities()
  {}
}

const API=" http://localhost:3000/Activity";