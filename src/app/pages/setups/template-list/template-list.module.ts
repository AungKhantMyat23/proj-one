import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateListComponent } from './template-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TemplateListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Template List' },
  },
];

@NgModule({
  declarations: [TemplateListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TemplateListModule {}
