import { UserInfo } from './models/auth-info';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({ providedIn: 'root' })

export class AuthService {
    private currentUserSubject: BehaviorSubject<UserInfo>;
    public currentUser: Observable<UserInfo>;

    constructor() {
        this.currentUserSubject = new
            BehaviorSubject<UserInfo>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get currentUserValue(): UserInfo {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const user: UserInfo = {
            id: new Date().getTime().toString(),
            userName: username,
            passWord: password
        };
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
