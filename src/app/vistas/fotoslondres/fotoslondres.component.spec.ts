import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoslondresComponent } from './fotoslondres.component';

describe('FotoslondresComponent', () => {
  let component: FotoslondresComponent;
  let fixture: ComponentFixture<FotoslondresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoslondresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoslondresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
