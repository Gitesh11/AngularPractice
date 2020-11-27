import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { ToolBarComponent } from './Component/tool-bar/tool-bar.component';
import { ShopItemsComponent } from './Component/shop-items/shop-items.component';
import { CalDiscountPipe } from './pipes/cal-discount.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';
import { ItemDetailsComponent } from './Component/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ToolBarComponent,
    ShopItemsComponent,
    CalDiscountPipe,
    HighlightDirective,
    SampleDirective,
    SamplePipe,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'items', component: ShopItemsComponent },
      { path: 'item-details', component: ItemDetailsComponent },
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
