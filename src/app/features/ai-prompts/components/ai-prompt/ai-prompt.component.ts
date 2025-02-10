import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AiPromptsService } from '../../services/ai-prompts.service';
import { BehaviorSubject, Subject } from 'rxjs';

interface PromptResult {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  done_reason: string;
  context: number[];
  total_duration: number;
  load_duration: number;
  prompt_eval_count: number;
  prompt_eval_duration: number;
  eval_count: number;
  eval_duration: number;
}

@Component({
  selector: 'app-ai-prompt',
  templateUrl: './ai-prompt.component.html',
  styleUrls: ['./ai-prompt.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AiPromptComponent {
  aiPromptForm: FormGroup;

  private readonly destroy$ = new Subject<void>();
  response$ = new BehaviorSubject<PromptResult | null>(null);

  constructor(private fb: FormBuilder, private aiPromptsService: AiPromptsService) {
    this.aiPromptForm = this.fb.group({
      prompt: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.aiPromptForm.valid) {
      const prompt = this.aiPromptForm.get('prompt')?.value;
      this.aiPromptsService.postPrompt(prompt).subscribe({
        next: (response) => {
          this.response$ = response;
          console.log('Prompt submitted:', response);
        },
        error: (error) => console.error('Error submitting prompt:', error)
      });
    }
  }
}