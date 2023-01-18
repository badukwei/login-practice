import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { ListComponent } from './page/list/list.component';
import { LoginComponent } from './page/login/login.component';
import { IndexComponent } from './page/index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 路由轉向首頁
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  // 首頁
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'list', component: ListComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
