import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from './auth.service';
import {take, map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService, 
        private router : Router){}


    canActivate(next, state): Observable<boolean>{
       return this.auth.user$.pipe(
           take(1),
           map(user => !!user), // <-- map to boolean  
           tap(loggedIn=>{
               if(!loggedIn){
                   console.log('管理者以外のアクセスは拒否されます');
                   this.router.navigate(['/signin'])
               }
           })
);
           
    
}
}