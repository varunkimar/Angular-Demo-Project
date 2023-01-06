import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagentfndComponent } from './pagentfnd.component';

describe('PagentfndComponent', () => {
  let component: PagentfndComponent;
  let fixture: ComponentFixture<PagentfndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagentfndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagentfndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
