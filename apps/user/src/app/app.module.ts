import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CommonAllModule } from '@task2023/common-all'
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@task2023/shared';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,CommonAllModule,HttpClientModule,AuthModule,BrowserAnimationsModule,SharedModule,UserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
