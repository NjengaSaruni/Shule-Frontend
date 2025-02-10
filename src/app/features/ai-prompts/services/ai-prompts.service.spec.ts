import { TestBed } from '@angular/core/testing';

import { AiPromptsService } from './ai-prompts.service';

describe('AiPromptsService', () => {
  let service: AiPromptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiPromptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
