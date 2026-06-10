import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesTabelaComponent } from './botoes-tabela.component';

describe('BotoesTabelaComponent', () => {
  let component: BotoesTabelaComponent;
  let fixture: ComponentFixture<BotoesTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
