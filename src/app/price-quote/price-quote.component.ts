import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html'
})
export class PriceQuoteComponent implements OnInit {
  @Input() priceQuotes: any[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.setUpCols();
  }

  setUpCols() {
    this.cols = [
      { field: 'supplierAbbreviation', header: '供应商简称' },
      { field: 'quoteNumber', header: '报价单号' },
      { field: 'isSample', header: '样品' },
      { field: 'specification', header: '规格' },
      { field: 'quoteDate', header: '报价日期' },
      { field: 'minimumOrderQuantity', header: '最低订购量(MOQ)' },
      { field: 'unit', header: '单位' },
      { field: 'notIncludingTaxAtFactory', header: '不含税-本厂' },
      { field: 'includingTaxAtFactory', header: '含税-本厂' },
      { field: 'includingTaxCostPercent', header: '含税收费%' },
      { field: 'totalAmount', header: '总金额' },
      { field: 'invoiceType', header: '发票类型' },
      { field: 'effectiveDate', header: '生效日期' },
      { field: 'newQuoteNumber', header: '新报价单号' },
      { field: 'paymentType', header: '付款收票方式' },
      { field: 'paymentChannel', header: '付款途径' },
      { field: 'currency', header: '币种' },
      { field: 'deliveryType', header: '送货方式' },
      { field: 'deliveryCost', header: '送货费用' }
    ];
  }
}
