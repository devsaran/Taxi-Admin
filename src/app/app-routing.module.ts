import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
      ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then( m => m.DriversPageModule)
  },
  {
    path: 'manage',
    loadChildren: () => import('./pages/manage/manage.module').then( m => m.ManagePageModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => 
      import('./pages/profile/profile.module').then( (m) => m.ProfilePageModule),
      ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./pages/network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'cartypes',
    loadChildren: () => import('./pages/cartypes/cartypes.module').then( m => m.CartypesPageModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./pages/prices/prices.module').then( m => m.PricesPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'payout',
    loadChildren: () => import('./pages/payout/payout.module').then( m => m.PayoutPageModule)
  },
  {
    path: 'rider-app',
    loadChildren: () => import('./pages/rider-app/rider-app.module').then( m => m.RiderAppPageModule)
  },
  {
    path: 'driver-app',
    loadChildren: () => import('./pages/driver-app/driver-app.module').then( m => m.DriverAppPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
