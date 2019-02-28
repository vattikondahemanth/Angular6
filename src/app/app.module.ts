import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponentComponent,
    CustomErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path : 'Home',
        component : HomeComponent
      },{
        path : 'Payal',
        pathMatch : 'prefix',
        children : [
          {
            path : '**', component : HomeComponent
          }

        ]
      },
      {
        path: '',
        redirectTo: 'Login',
        pathMatch : 'full'
      },
      {
        path: '404',
        component: NotFoundComponentComponent
      },
      {
        path: '**', redirectTo: '404'
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
