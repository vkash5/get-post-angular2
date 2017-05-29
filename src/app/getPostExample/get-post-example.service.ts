import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPostExampleService{

private baseUrl: string = 'https://jsonplaceholder.typicode.com/posts?id=1';
    constructor(private http : Http){}
  postData(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({"testing":"failure"});
    return this.http.post(this.baseUrl, body, headers).map((res: Response) => res.json());
  }
  getData(){
    return this.http.get(this.baseUrl).map((res: Response) => res.json());
  }
}