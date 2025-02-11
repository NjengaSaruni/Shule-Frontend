// filepath: /c:/Users/peter/workplace/shule/src/app/features/ai-prompts/services/ai-prompts.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AiPromptsService {
  private apiUrl = 'http://localhost:8000/llm/ollama/';

  constructor(private http: HttpClient) { }

  postPrompt(prompt: string): Observable<any> {
    const body = { prompt };
    return this.http.post<any>(this.apiUrl, body);
  }
}