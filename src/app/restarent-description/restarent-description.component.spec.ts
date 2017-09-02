import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarentDescriptionComponent } from './restarent-description.component';

describe('RestarentDescriptionComponent', () => {
  let component: RestarentDescriptionComponent;
  let fixture: ComponentFixture<RestarentDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestarentDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
