import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class freeApiService
{
    constructor(private httpclient: HttpClient){}
    getcountry():Observable<any>{
        return this.httpclient.get("http://localhost:3000/country");
    }
}


