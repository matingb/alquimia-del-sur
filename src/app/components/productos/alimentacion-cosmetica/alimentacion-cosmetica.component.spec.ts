import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentacionCosmeticaComponent } from './alimentacion-cosmetica';

describe('AlimentacionCosmeticaComponent', () => {
  let component: AlimentacionCosmeticaComponent;
  let fixture: ComponentFixture<AlimentacionCosmeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacionCosmeticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionCosmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
