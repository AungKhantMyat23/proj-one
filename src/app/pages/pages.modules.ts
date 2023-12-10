import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'setups',
        loadChildren: () =>
          import('./setups/setups.module').then((m) => m.SetupsModule),
        data: { breadcrumb: 'Setups' }, 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [PagesComponent],
})
export class PagesModule {}
