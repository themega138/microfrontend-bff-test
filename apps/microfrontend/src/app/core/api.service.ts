import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) {}

  getGreeting(): Observable<{ message: string; timestamp: string }> {
    return this.http.get<{ message: string; timestamp: string }>(`${this.baseUrl}/dummy`);
  }

  getItems(): Observable<Array<{ name: string; description?: string }>> {
    return this.http.get<Array<{ name: string; description?: string }>>(`${this.baseUrl}/items`);
  }
}
