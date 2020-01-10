// app.component.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MessagesComponent } from './pages/messages/messages.component';
// import { HeroSearchComponent } from './pages/hero-search/hero-search.component';
import { LayoutDefaultComponent } from 'src/app/layout/default/default.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, LayoutDefaultComponent
      ],
      imports: [
        // fix errors:  'router-outlet' is not a known element
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
