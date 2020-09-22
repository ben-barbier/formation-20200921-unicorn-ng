import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornCardComponent } from './pages/unicorns-list/unicorn-card/unicorn-card.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { MagicPipe } from './shared/pipes/magic.pipe';

@NgModule({
    declarations: [AppComponent, UnicornsListComponent, UnicornCardComponent, MagicPipe, NavComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
