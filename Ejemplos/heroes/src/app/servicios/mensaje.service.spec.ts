import { TestBed, inject } from '@angular/core/testing';

import { MensajeService } from './mensaje.service';

describe('MensajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajeService]
    });
  });

  it('should be created', inject([MensajeService], (service: MensajeService) => {
    expect(service).toBeTruthy();
  }));
});
