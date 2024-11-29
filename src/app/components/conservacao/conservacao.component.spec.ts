import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservacaoComponent } from './conservacao.component';

describe('ConservacaoComponent', () => {
  let component: ConservacaoComponent;
  let fixture: ComponentFixture<ConservacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConservacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConservacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
