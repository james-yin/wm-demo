import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-po-detail-item',
  templateUrl: './po-detail-item.component.html'
})
export class PoDetailItemComponent implements OnInit {
  @Input() items: any[];
  cols: any[];

  constructor() {}

  ngOnInit() {
    this.setUpCols();
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
