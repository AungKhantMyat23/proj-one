import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-list',
    loadChildren: () =>
      import('./template-list/template-list.module').then(
        (m) => m.TemplateListModule
      ),
    data: { breadcrumb: 'Setups' },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SetupsModule {}
