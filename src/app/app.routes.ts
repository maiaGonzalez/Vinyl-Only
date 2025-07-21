import { Routes } from '@angular/router';
import { VinylOnlyAbout } from './vinyl-only-about/vinyl-only-about';
import { VinylDiscos } from './vinyl-discos/vinyl-discos';

export const routes: Routes = [
     {
        path: '',
        redirectTo: 'discos',
        pathMatch:'full'
    },
    {
        path: 'discos',
        component: VinylDiscos
    },
     {
        path: 'about',
        component: VinylOnlyAbout
    },
];
