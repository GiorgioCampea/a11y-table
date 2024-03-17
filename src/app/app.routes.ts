import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
                loadComponent:
                    () => import('./components/normal-table/normal-table.component')
                        .then(c => c.NormalTableComponent)
            },
            {
                path: 'sortable',
                loadComponent:
                    () => import('./components/sortable-table/sortable-table.component')
                        .then(c => c.SortableTableComponent)
            },
            {
                path: 'accessible-sortable',
                loadComponent:
                    () => import('./components/accessible-sortable-table/accessible-sortable-table.component')
                        .then(c => c.AccessibleSortableTableComponent)
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
