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
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { HelperService } from './shared/helper.service';
import { MediaService } from './shared/media.service';
import { PoSummaryComponent } from './po-summary/po-summary.component';
import { PoSuggestionComponent } from './po-suggestion/po-suggestion.component';
import { PoDetailComponent } from './po-detail/po-detail.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { PoEditComponent } from './po-edit/po-edit.component';
import { PoDetailItemComponent } from './po-detail-item/po-detail-item.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ApproveComponent } from './approve/approve.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ScannerInputComponent } from './scanner-input/scanner-input.component';
import { ScannerInputContainerComponent } from './scanner-input-container/scanner-input-container.component';
import { FlatContainerComponent } from './flat-container/flat-container.component';
import { FlatSummaryComponent } from './flat-summary/flat-summary.component';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { FlatQuoteComponent } from './flat-quote/flat-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    PoSummaryComponent,
    PoSuggestionComponent,
    PoDetailComponent,
    PriceQuoteComponent,
    PoEditComponent,
    PoDetailItemComponent,
    FileUploadComponent,
    ApproveComponent,
    ToDoComponent,
    ScannerInputComponent,
    ScannerInputContainerComponent,
    FlatContainerComponent,
    FlatSummaryComponent,
    FlatDetailComponent,
    FlatQuoteComponent
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
    FileUploadModule,
    NgxGalleryModule
  ],
  providers: [DataService, ConfirmationService, HelperService, MediaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
