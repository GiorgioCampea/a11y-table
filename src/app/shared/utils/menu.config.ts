export const MenuConfig = {
    elements: [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/table',
            name: 'Table',
            children: [
                {
                    path: 'normal',
                    name: 'Normal Table',
                },
                {
                    path: 'sortable',
                    name: 'Sortable Table',
                },
                {
                    path: 'accessible-sortable',
                    name: 'Accessibile Sortable',
                },
            ]
        },
    ]
}