import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessToken } from './access-token';

const routes: Routes = [
  { path: 'test', canLoad: [AccessToken], loadChildren: () => import('./test/test.module').then((m) => m.TestModule) },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AccessToken],
})
export class AppRoutingModule {}
