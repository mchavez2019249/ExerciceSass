import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { ModulosExampleComponent } from './components/modulos-example/modulos-example.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import {MatSelectModule} from '@angular/material/select';
import { LifecycleHooksHijoComponent } from './components/lifecycle-hooks-hijo/lifecycle-hooks-hijo.component';
import { AppBComponent } from './components/app-b/app-b.component';
import { AppCComponent } from './components/app-c/app-c.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SidenavComponent,
    ModulosExampleComponent,
    FormDialogComponent,
    LifecycleHooksComponent,
    LifecycleHooksHijoComponent,
    AppBComponent,
    AppCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
