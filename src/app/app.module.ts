import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestDirective } from './test.directive';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: TestComponent
  },
  {
    path: '**',
    component: TestComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    TestDirective
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes),
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
