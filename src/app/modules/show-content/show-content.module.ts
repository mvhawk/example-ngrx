import { ShowContentRoutingModule } from './show-content-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowContentPageComponent } from './show-content-page/show-content-page.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    ShowContentPageComponent,
    ItemCardComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ShowContentRoutingModule
  ]
})
export class ShowContentModule { }
