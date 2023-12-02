import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BoardComponent } from './components/board/board.component';
import { Page404Component } from './components/page404/page404.component';
import { ContactSuccessComponent } from './components/contact-success/contact-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  {
    path: 'contact-success',
    component: ContactSuccessComponent,
    data: { animation: 'Contact-Success' },
  },
  { path: 'blog', component: BlogComponent, data: { animation: 'Blog' } },
  { path: 'board', component: BoardComponent, data: { animation: 'Board' } },
  { path: '404-page', component: Page404Component, data: { animation: '404' } },
  { path: '**', component: Page404Component, data: { animation: '404' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
