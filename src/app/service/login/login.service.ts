import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from 'src/app/core/auth/models/auth-info';

@Injectable({ providedIn: 'root' })

export class LoginService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const url = `/account/login`;
        return this.http.post<UserInfo>(url, {
            username,
            password
        });
    }

    logout() {
        const url = `/account/logout`;
        return this.http.get(url);
    }
}
