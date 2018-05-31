import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-flat-summary',
  templateUrl: './flat-summary.component.html'
})
export class FlatSummaryComponent implements OnInit {
  cols: any[];
  poSummary: any[];
  selectedSummary: any;

  constructor(private dataService: DataService, public helper: HelperService) {}

  ngOnInit() {
    this.getPoSummaryData();
    this.setUpCols();
  }

  setUpCols() {
    this.cols = [
      {
        field: 'materialNumber',
        header: '物料编号'
      },
      {
        field: 'imageFile',
        header: '图档'
      },
      {
        field: 'isSample',
        header: '样品'
      },
      {
        field: 'specifications',
        header: '规格型号'
      },
      {
        field: 'materialName',
        header: '物料名称'
      },
      {
        field: 'purchaseUnit',
        header: '请购单位'
      },
      {
        field: 'purchaseQuantity',
        header: '请购数量'
      },
      {
        field: 'standardUnit',
        header: '标准单位'
      },
      {
        field: 'standardQuantity',
        header: '标准数量'
      },
      {
        field: 'deliveryLocation',
        header: '送货地点'
      },
      {
        field: 'packaging',
        header: '包裝'
      },
      {
        field: 'recommendedSupplier',
        header: '建议供应商'
      },
      {
        field: 'isOpenOrder',
        header: '已開訂單'
      }
    ];
  }

  getPoSummaryData() {
    this.dataService.getPoSummaryData().subscribe(data => {
      this.poSummary = data;
    });
  }

  onRowSelect(event) {
    const id = event.data.id;
    console.log('id', id);
  }
}
