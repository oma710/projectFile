import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
const baseurl= environment.baseurl;
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http : HttpClient) { }

  getFiles(page:any,size:any){
    return this.http.get<any>(baseurl+"files?page="+page+"&size="+size+"");
  }

  uploadFile( file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);

    /*
    const req = new HttpRequest('POST', `${baseurl}files`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    const headers = new  HttpHeaders({

    })
      */

   return  this.http.post(`${baseurl}files`,formData)
  }


  getFile(){
    return this.http.get(baseurl+"files/{id}")
  }

}
