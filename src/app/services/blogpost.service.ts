import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../util/constants';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  constructor(private httpClient: HttpClient) {}

  fetchAllBlogs() {
    return this.httpClient.get(`${baseUrl}fetchallstory`);
  }
}
