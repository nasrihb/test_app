import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ListesUtilisateursComponent } from './pages/listes-utilisateurs/listes-utilisateurs.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';





FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ListesUtilisateursComponent,
    CalendarComponent
  ],
  exports:[
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
