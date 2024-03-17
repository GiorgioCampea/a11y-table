import { Routes } from '@angular/router';
import { NormalTableComponent } from './components/normal-table/normal-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SortableTableComponent } from './components/sortable-table/sortable-table.component';
import { AccessibleSortableTableComponent } from './components/accessible-sortable-table/accessible-sortable-table.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'table',
        children: [
            {
                path: 'normal',
                component: NormalTableComponent
            },
            {
                path: 'sortable',
                component: SortableTableComponent
            },
            {
                path: 'accessible-sortable',
                component: AccessibleSortableTableComponent
            },
        ]
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
