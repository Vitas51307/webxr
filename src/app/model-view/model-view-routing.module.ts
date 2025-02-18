import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChairComponent} from "./chair/chair.component";
import {BusinessCardComponent} from "./business-card/business-card.component";
import {MouseComponent} from "./mouse/mouse.component";
import {CowComponent} from "./cow/cow.component";
import {CatComponent} from "./cat/cat.component";

const routes: Routes = [
  {path: 'chair', component: ChairComponent},
  {path: 'business-card', component: BusinessCardComponent},
  {path: 'mouse', component: MouseComponent},
  {path: 'cow', component: CowComponent},
  {path: 'cat', component: CatComponent},
  {path: '', redirectTo: 'business-card', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelViewRoutingModule {
}
