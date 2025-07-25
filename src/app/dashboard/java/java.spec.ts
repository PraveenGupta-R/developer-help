import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaComponent } from './java';

describe('Java', () => {
  let component: JavaComponent;
  let fixture: ComponentFixture<JavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
