import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiPromptsRoutingModule } from './ai-prompts-routing.module';
import { AiPromptsService } from './services/ai-prompts.service';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AiPromptsRoutingModule
  ],
  providers: [
    AiPromptsService,
    provideHttpClient(withInterceptorsFromDi(), withFetch())
  ]
})
export class AiPromptsModule { }
