import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IframeDialogComponent } from './iframe-dialog/iframe-dialog.component';

const routes: Routes = [{path:'home', component: HomeComponent}, {path:'', component:HomeComponent},
{path: 'iframe-dialog', component: IframeDialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
