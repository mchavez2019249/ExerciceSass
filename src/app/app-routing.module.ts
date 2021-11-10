import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ModulosExampleComponent} from "./components/modulos-example/modulos-example.component";
import {LifecycleHooksComponent} from "./components/lifecycle-hooks/lifecycle-hooks.component";
import {AMaterialComponent} from "./components/a-material/a-material.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'modulos', component: ModulosExampleComponent},
  {path: 'lifecycle', component: LifecycleHooksComponent},
  {path: 'material', component: AMaterialComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
