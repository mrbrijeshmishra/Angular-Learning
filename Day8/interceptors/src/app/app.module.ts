import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { I1, I2 } from './my-interceptor.service';

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: I1,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: I2,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
