import { AuthGaurdService } from './services/auth-gaurd.service';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


export const appRoutes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGaurdService] },
    { path: '**', redirectTo: 'login' }

];

