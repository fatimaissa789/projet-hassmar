import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postAlert(data : any){
     return this.http.post<any>("http://localhost:3000/posts",data)
     .pipe(map((res:any)=>{
       return res;
     }))
  }

  postOperation(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
 }
  
 getOperation(){
  return this.http.get<any>("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
    return res;
  }))
}
  getAlert(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
 }

 updateAlert(data : any,id: number){
  return this.http.put<any>("http://localhost:3000/posts/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

deleteAlert(id : number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
