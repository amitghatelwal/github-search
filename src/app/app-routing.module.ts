import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchSectionComponent } from './search-section/search-section.component';
import { HistorySectionComponent } from './history-section/history-section.component';
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SearchSectionComponent,
    HistorySectionComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'search-section', component: SearchSectionComponent },
      { path: 'history-section', component: HistorySectionComponent },
      { path: '', redirectTo: '/search-section', pathMatch: 'full' },
    ]),
    BrowserModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
