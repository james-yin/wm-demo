import { Component, ViewChild } from '@angular/core';

import { AppTabs } from './shared/app-tabs.enum';
import { ApproveComponent } from './approve/approve.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(ApproveComponent) approve: ApproveComponent;

  onTabChange(e) {
    if (e.index === AppTabs.Approve) {
      this.approve.updateMedia();
    }
  }
}
