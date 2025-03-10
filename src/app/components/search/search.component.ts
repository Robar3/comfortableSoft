import {AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, model, ViewChild} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {LibraryDataService} from '../../service/library-data.service';
import {LibraryInfo} from '../model/libriaryModel';
import {Router} from '@angular/router';
import {HighlighterPipe} from '../../pipe/highlighter.pipe';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';


@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatCellDef, MatHeaderCellDef, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef, HighlighterPipe, MatPaginator
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator= new MatPaginator(new MatPaginatorIntl());
  searchValue = model('');
  displayedColumns: string[] = ['id', 'name', 'address'];
  dataSource = computed(()=>new MatTableDataSource(this.libraryDataService.libraries().filter((library)=>library.Cells.FullName.includes(this.searchValue())).map((library=>{return{globalId:library.global_id,id:library.Number,name:library.Cells.FullName,address:library.Cells.ObjectAddress[0].Address}}))));

  constructor(private libraryDataService:LibraryDataService,private router:Router) {
    effect(() => {
      this.dataSource().paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource().paginator = this.paginator;
  }

  search() {
    const query = `?q=${this.searchValue}`
    this.libraryDataService.getLibraries(query)
  }

  clickRow(row:LibraryInfo) {
    console.log(row);
    this.router.navigate(['/library',row.globalId]);
  }
}
