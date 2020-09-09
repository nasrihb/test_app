import { Routes } from '@angular/router';

import { ListesUtilisateursComponent } from 'src/app/pages/listes-utilisateurs/listes-utilisateurs.component';
import { CalendarComponent } from 'src/app/pages/calendar/calendar.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'Calendar',   component: CalendarComponent },
    { path: 'Listes-utilisateurs', component: ListesUtilisateursComponent },
];
