import { Component, OnInit } from '@angular/core';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html'
})
export class FlatDetailComponent implements OnInit {
  detailData: any;
  cols: any[];
  selectedDetail: any;
  dt: Date;

  constructor(public helper: HelperService) {}

  ngOnInit() {
    this.setUpCols();
  }

  populateData(detailData) {
    this.detailData = detailData;
  }

  onRowSelect(event) {
    this.dt = new Date(`${event.data['estimatedDeliveryDate']}T00:00:00`);
  }

  setUpCols() {
    this.cols = [
      { field: 'supplier', header: '供应商' },
      { field: 'quoteNumber', header: '报价单号' },
      { field: 'requestQuantity', header: '请购数量' },
      { field: 'standardQuantity', header: '标准数量' },
      { field: 'estimatedDeliveryDate', header: '预计到货日期' },
      { field: 'isInvoiced', header: '开票' },
      { field: 'invoiceCompany', header: '开票公司' },
      { field: 'invoiceTitle', header: '开票名称' },
      { field: 'taxRate', header: '税率' },
      { field: 'priceIncludingTax', header: '含税价' },
      { field: 'paymentType', header: '采购方式' },
      { field: 'excludingTaxAtFactory', header: '不含税-本厂' },
      { field: 'includingTaxAtFactory', header: '含税-本厂' }
    ];
  }
}
