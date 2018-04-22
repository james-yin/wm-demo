import { Component, OnInit, Input } from '@angular/core';

import { ConfirmationService, Message } from 'primeng/api';

import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-po-detail',
  templateUrl: './po-detail.component.html'
})
export class PoDetailComponent implements OnInit {
  @Input() poDetails: any[];
  cols: any[];
  selectedDetail: any;
  displayDetailDialog = false;
  msgs: Message[] = [];
  dt: Date;

  constructor(
    private confirmationService: ConfirmationService,
    public helper: HelperService
  ) {}

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

  confirm() {
    this.confirmationService.confirm({
      message: '确定要删除此记录吗?',
      accept: () => {
        this.displayDetailDialog = false;
        this.msgs = [
          {
            severity: 'info',
            summary: '确认',
            detail: '此记录已删除'
          }
        ];
      }
    });
  }

  onRowSelect(event) {
    this.dt = new Date(`${event.data['estimatedDeliveryDate']}T00:00:00`);
    this.displayDetailDialog = true;
  }

  save() {
    this.displayDetailDialog = false;
  }
}
