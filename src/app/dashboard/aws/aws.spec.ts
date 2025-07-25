import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aws } from './aws';

describe('Aws', () => {
  let component: Aws;
  let fixture: ComponentFixture<Aws>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aws]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aws);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
