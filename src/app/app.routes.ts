import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { LocationsComponent } from '../components/locations/locations.component';
import { DesignComponent } from '../components/designs/designs.component';

export const routes: Routes = [
    //Add the home when there is no parameters or make it start in home
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'about', component: AboutUsComponent},
    {path: 'locations', component: LocationsComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'designs', component: DesignComponent},

];
