import { Routes } from '@angular/router';
import {BlogFormComponent} from "./components/blog-form.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: BlogFormComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
];
