import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornCardComponent } from './pages/unicorns-list/unicorn-card/unicorn-card.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';

@NgModule({
    declarations: [AppComponent, UnicornsListComponent, UnicornCardComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
