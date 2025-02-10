import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ai-prompt',
  templateUrl: './ai-prompt.component.html',
  styleUrls: ['./ai-prompt.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AiPromptComponent {
  aiPromptForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.aiPromptForm = this.fb.group({
      prompt: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Handle form submission
  }
}