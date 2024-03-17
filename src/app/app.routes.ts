import { Routes } from '@angular/router';
import { NormalTableComponent } from './components/normal-table/normal-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'normal',
        component: NormalTableComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
