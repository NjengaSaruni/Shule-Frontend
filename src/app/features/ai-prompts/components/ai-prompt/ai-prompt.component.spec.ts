import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptComponent } from './ai-prompt.component';
import { AiPromptsService } from '../../services/ai-prompts.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AiPromptComponent', () => {
  let component: AiPromptComponent;
  let fixture: ComponentFixture<AiPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AiPromptComponent,
      ],
      providers: [
        AiPromptsService,
        provideHttpClient(),
        provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
