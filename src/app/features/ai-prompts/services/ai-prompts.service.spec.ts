import { TestBed } from '@angular/core/testing';

import { AiPromptsService } from './ai-prompts.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AiPromptsService', () => {
  let service: AiPromptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AiPromptsService]
    });
    service = TestBed.inject(AiPromptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
