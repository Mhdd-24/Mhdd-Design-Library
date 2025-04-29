import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhddLibraryComponent } from './mhdd-library.component';

describe('MhddLibraryComponent', () => {
  let component: MhddLibraryComponent;
  let fixture: ComponentFixture<MhddLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MhddLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MhddLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
