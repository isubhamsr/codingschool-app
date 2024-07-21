import { Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blog', component: BlogComponent },
];
