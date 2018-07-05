import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProblemComponent} from './problem.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDetailsComponent } from './problem-details/problem-details.component';
import { ProblemCreatorComponent } from './problem-creator/problem-creator.component';
import { ProblemEditorComponent } from './problem-editor/problem-editor.component';


const routes= [
  {
    path: 'problem',
    component: ProblemComponent,
    children: [
      {path: '', component: ProblemListComponent,},
      {path: ':problem_id', component: ProblemDetailsComponent,},
      {path: ':problem_id/create', component: ProblemCreatorComponent,},
      {path: ':problem_id/edit', component: ProblemEditorComponent,},
    ],
  },
];

@NgModule({
  declarations: [
    ProblemComponent,
    ProblemListComponent,
    ProblemDetailsComponent,
    ProblemCreatorComponent,
    ProblemEditorComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],

  exports:[
    RouterModule
  ]
})
export class ProblemRouterModule {}
