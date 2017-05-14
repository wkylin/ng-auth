import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './../service/auth.service';
@Injectable()
export class GuardService implements CanActivate {
    constructor(private authService: AuthService) {
    }
    canActivate(): boolean {
        return this.authService.isLoggedIn();
    }
}
