import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { UnicornsListRoutingModule } from './unicorns-list-routing.module';
import { UnicornsListComponent } from './unicorns-list.component';

@NgModule({
    declarations: [UnicornsListComponent, UnicornCardComponent],
    imports: [SharedModule, UnicornsListRoutingModule],
})
export class UnicornsListModule {}
