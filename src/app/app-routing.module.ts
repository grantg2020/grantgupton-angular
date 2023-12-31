import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideRouter(routes), provideProtractorTestingSupport()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
