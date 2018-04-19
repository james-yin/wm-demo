import { Component, OnInit } from '@angular/core';

import { ConfirmationService, Message } from 'primeng/api';
import * as _ from "lodash";

import { DataService } from '../data.service';

@Component({
  selector: 'app-po-summary',
  templateUrl: './po-summary.component.html'
})
export class PoSummaryComponent implements OnInit {
  cols: any[];
  poSummary: any[];
  selectedSummary: any;
  displayDialog = false;
  msgs: Message[] = [];
  
  constructor(
    private dataService: DataService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getPoSummaryData();
    this.setUpCols();
  }

  confirm() {
    this.confirmationService.confirm({
        message: '确定要删除此记录吗?',
        accept: () => {
            this.displayDialog = false;
            this.msgs = [{severity:'info', summary:'确认', detail:'此记录已删除'}];
        }
    });
  }

  setUpCols() {
    this.cols = [
      { field: 'materialNumber', header: '物料编号' },
      { field: 'imageFile', header: '图档' },
      { field: 'isSample', header: '样品' },
      { field: 'specifications', header: '规格型号' },
      { field: 'materialName', header: '物料名称' },
      { field: 'purchaseUnit', header: '请购单位' },
      { field: 'purchaseQuantity', header: '请购数量' },
      { field: 'standardUnit', header: '标准单位' },
      { field: 'standardQuantity', header: '标准数量' },
      { field: 'deliveryLocation', header: '送货地点' },
      { field: 'packaging', header: '包裝' },
      { field: 'recommendedSupplier', header: '建议供应商' },
      { field: 'isOpenOrder', header: '已開訂單' },
    ];
  }

  getPoSummaryData() {
    this.dataService.getPoSummaryData().subscribe(data => {
      this.poSummary = data;
    });
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

  save() {
    this.displayDialog = false;
  }
}
