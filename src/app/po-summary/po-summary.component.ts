import { Component, OnInit } from '@angular/core';

import { ConfirmationService, Message } from 'primeng/api';
import * as _ from 'lodash';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';

import { DataService } from '../shared/data.service';
import { HelperService } from '../shared/helper.service';

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
  expandedRowId: string;

  constructor(
    private dataService: DataService,
    private confirmationService: ConfirmationService,
    public helper: HelperService
  ) {}

  ngOnInit() {
    this.getPoSummaryData();
    this.setUpCols();
  }

  genPdf() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const docDefinition = {
      content: [{ text: '请购汇总', style: 'header' }]
    };
    pdfMake.createPdf(docDefinition).open();
    // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
  }

  confirm() {
    this.confirmationService.confirm({
      message: '确定要删除此记录吗?',
      accept: () => {
        this.displayDialog = false;
        this.msgs = [
          {
            severity: 'info',
            summary: '确认',
            detail: '此记录已删除'
          }
        ];
      },
      reject: () => {}
    });
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
    this.displayDialog = true;
  }

  onRowExpand(event) {
    this.expandedRowId = event.data.id;
  }

  onRowCollapse(event) {
    this.expandedRowId = undefined;
  }

  save() {
    this.displayDialog = false;
    this.msgs = [
      {
        severity: 'info',
        summary: '确认',
        detail: '此记录已保存'
      }
    ];
  }
}
