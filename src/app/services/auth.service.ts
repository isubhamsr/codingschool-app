import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../util/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  onSignIn(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };
    return this.httpClient.post(`${baseUrl}superadminsignin`, body);
  }
}
