import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideRouter(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
