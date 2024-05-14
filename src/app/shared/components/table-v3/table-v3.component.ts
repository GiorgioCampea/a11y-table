import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/table-column';

@Component({
  selector: 'app-table-v3',
  standalone: true,
  imports: [],
  templateUrl: './table-v3.component.html',
  styleUrl: './table-v3.component.scss'
})
export class TableV3Component {
  @Input() description: string = '';
  @Input() tableColumn: TableColumn[] = [];
  @Input() elements: any[] = [];

}
