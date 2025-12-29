import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyService {
  getGreeting() {
    return {
      message: 'Hola desde el BFF',
      timestamp: new Date().toISOString(),
    };
  }
}
