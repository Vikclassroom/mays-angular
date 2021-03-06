import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComments} from '../../model-interface/comments';
import {IGetComment} from '../../model-interface/get-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Array<IComments>> {
    return this.http.get<Array<IComments>>(this.baseUrl + 'comments');
  }

  getPerIdComments(id: any): Observable<Array<IGetComment>> {
    return this.http.get<Array<IGetComment>>(this.baseUrl + 'comments/post/' + id);
  }

  postComments(values: any): Observable<IComments> {
    return this.http.post<IComments>(this.baseUrl + 'comments', values);
  }

  putComments(id: any, values: any): Observable<IComments> {
    return this.http.put<IComments>(this.baseUrl + 'comments/' + id, values);
  }

  deleteComments(id: any): Observable<IComments> {
    return this.http.delete<IComments>(this.baseUrl + 'comments/' + id);
  }
}
