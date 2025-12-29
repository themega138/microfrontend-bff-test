import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ItemResponse {
  name: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class ReportsService {
  private readonly apiUrl = 'http://localhost:3000/api/items';

  constructor(private readonly http: HttpClient) {}

  fetchItems(): Observable<ItemResponse[]> {
    return this.http.get<ItemResponse[]>(this.apiUrl);
  }
}
