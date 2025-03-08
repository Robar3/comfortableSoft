import { Component } from '@angular/core';
import {HighlighterPipe} from '../../pipe/highlighter.pipe';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-library',
  imports: [
    HighlighterPipe,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.sass'
})
export class LibraryComponent {

}
