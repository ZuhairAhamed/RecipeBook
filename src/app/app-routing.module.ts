import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  // @ts-ignore
  {path: 'recipes', loadChildren: () => import('./recipes/recipies.module').then(m => m.RecipiesModule)},
  // @ts-ignore
  {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
  // @ts-ignore
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
