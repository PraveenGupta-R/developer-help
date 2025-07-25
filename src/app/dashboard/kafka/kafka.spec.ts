import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kafka } from './kafka';

describe('Kafka', () => {
  let component: Kafka;
  let fixture: ComponentFixture<Kafka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kafka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kafka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
