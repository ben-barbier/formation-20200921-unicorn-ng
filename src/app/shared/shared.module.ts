import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './material.module';
import { MagicPipe } from './pipes/magic.pipe';

@NgModule({
    declarations: [NavComponent, MagicPipe],
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule, NavComponent, MagicPipe],
})
export class SharedModule {}
