import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    
  ]
})

export class AdminLayoutModule {}
