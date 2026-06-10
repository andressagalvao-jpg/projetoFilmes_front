import { TestBed } from '@angular/core/testing';

import { ProdutorasService } from './produtoras.service';

describe('ProdutorasService', () => {
  let service: ProdutorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
