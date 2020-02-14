import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashbooard/dashboard.component';
import { ALaUneComponent } from './components/a-la-une/a-la-une.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { SportComponent } from './components/sport/sport.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home',      component: DashboardComponent },
  { path: 'A-la-une',      component: ALaUneComponent }, 
  { path: 'Vie-locale',      component: VieLocaleComponent }, 
  { path: 'Loisirs',      component: LoisirsComponent },
  { path: 'Sport',      component: SportComponent },
  { path: 'admin/article/ajout',      component: AddArticleComponent },
  { path: 'article/:id',      component: FullArticleComponent },
  { path: 'admin',      component: AdminComponent },
  { path: 'admin/article/edit/:id', component:EditArticleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
