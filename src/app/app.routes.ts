import { Routes } from '@angular/router';
import { JourneeComponent } from './page/journee/journee.component';
import { ImportantComponent } from './page/important/important.component';
import { PlanifierComponent } from './page/planifier/planifier.component';
import { AffecterComponent } from './page/affecter/affecter.component';
import { TacheComponent } from './page/tache/tache.component';

export const routes: Routes = [
    {path: '', redirectTo: 'jour', pathMatch: 'full'},
    {path: 'jour', component: JourneeComponent},
    {path: 'important', component: ImportantComponent},
    {path: 'planifier', component: PlanifierComponent},
    {path: 'affecter', component: AffecterComponent},
    {path: 'tache', component: TacheComponent}
];
