import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {ModulosExampleComponent} from './components/modulos-example/modulos-example.component';
import {FormDialogComponent} from './components/form-dialog/form-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks.component';
import {MatSelectModule} from '@angular/material/select';
import {LifecycleHooksHijoComponent} from './components/lifecycle-hooks-hijo/lifecycle-hooks-hijo.component';
import {AppBComponent} from './components/app-b/app-b.component';
import {AppCComponent} from './components/app-c/app-c.component';
import {MetaTagsModule} from "../../projects/meta-tags/src/lib/meta-tags.module";
import {AMaterialComponent} from './components/a-material/a-material.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatBadgeModule} from '@angular/material/badge';
import { BottomSheetOverviewExampleSheetComponent } from './components/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
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
    AMaterialComponent,
    BottomSheetOverviewExampleSheetComponent,
    SnackBarComponent,
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
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MetaTagsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
