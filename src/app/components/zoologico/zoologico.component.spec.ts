import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoologicoComponent } from './zoologico.component';

describe('ZoologicoComponent', () => {
  let component: ZoologicoComponent;
  let fixture: ComponentFixture<ZoologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoologicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
