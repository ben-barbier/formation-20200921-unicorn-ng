import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';

const routes: Routes = [
    { path: '', component: UnicornsListComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
