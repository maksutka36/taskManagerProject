import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './table/table.component';
import { StickerComponent } from './table/sticker/sticker.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ColumnComponent } from './table/column/column.component';
import { StickerDialogComponent } from './sticker-dialog/sticker-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesDialogComponent } from './tables-dialog/tables-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ShowingStickerDialogComponent } from './showing-sticker-dialog/showing-sticker-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    StickerComponent,
    ColumnComponent,
    StickerDialogComponent,
    HeaderComponent,
    SidebarComponent,
    TablesDialogComponent,
    ShowingStickerDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
