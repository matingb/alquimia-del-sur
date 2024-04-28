import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioCosmeticaComponent } from './bio-cosmetica.component';

describe('BioCosmeticaComponent', () => {
  let component: BioCosmeticaComponent;
  let fixture: ComponentFixture<BioCosmeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCosmeticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCosmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
