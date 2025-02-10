import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiPromptComponent } from './components/ai-prompt/ai-prompt.component';

const routes: Routes = [
  { path: '', component: AiPromptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiPromptsRoutingModule { }