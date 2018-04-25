import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HelperService } from './shared/helper.service';
import { PoSummaryComponent } from './po-summary/po-summary.component';
import { PoSuggestionComponent } from './po-suggestion/po-suggestion.component';
import { PoDetailComponent } from './po-detail/po-detail.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { PoEditComponent } from './po-edit/po-edit.component';
import { PoDetailItemComponent } from './po-detail-item/po-detail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PoSummaryComponent,
    PoSuggestionComponent,
    PoDetailComponent,
    PriceQuoteComponent,
    PoEditComponent,
    PoDetailItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
    GrowlModule,
    CalendarModule,
    TabViewModule,
    FileUploadModule
  ],
  providers: [DataService, ConfirmationService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
