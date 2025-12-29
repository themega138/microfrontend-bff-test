import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface DummyResponse {
  message: string;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly apiUrl = 'http://localhost:3000/api/dummy';

  constructor(private readonly http: HttpClient) {}

  fetchDummy(): Observable<DummyResponse> {
    return this.http.get<DummyResponse>(this.apiUrl);
  }
}
