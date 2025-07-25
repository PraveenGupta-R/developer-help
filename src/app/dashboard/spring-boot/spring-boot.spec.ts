import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBoot } from './spring-boot';

describe('SpringBoot', () => {
  let component: SpringBoot;
  let fixture: ComponentFixture<SpringBoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringBoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringBoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
