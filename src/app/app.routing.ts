import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDetailGuard } from "./services/app-guard.service";
import { AppDetailComponent } from "app/app-detail/app-detail.component";
import { AppComponent } from "app/app.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
