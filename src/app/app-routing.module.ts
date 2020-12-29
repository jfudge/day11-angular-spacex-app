import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import our pages
import { HomeComponent } from './pages/home/home.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { CrewComponent } from './pages/crew/crew.component';
import { AboutComponent } from './pages/about/about.component';
import { CrewMemberComponent } from './pages/crew-member/crew-member.component'

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'crew',
    component: CrewComponent,
  },
  {
    path: 'crew/:id', // :id is a variable that is used for passing information through the url.
    component: CrewMemberComponent,
  },
  {
    path: 'dragons',
    component: DragonsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
