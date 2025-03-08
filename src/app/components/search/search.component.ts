import {ChangeDetectionStrategy, Component, computed, effect, model} from '@angular/core';
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
  MatTable
} from '@angular/material/table';
import {LibraryDataService} from '../../service/library-data.service';
import {Library} from '../model/libriaryModel';
import {Router} from '@angular/router';
import {HighlighterPipe} from '../../pipe/highlighter.pipe';


@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatCellDef, MatHeaderCellDef, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef, HighlighterPipe
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  searchValue = model('');
  displayedColumns: string[] = ['id', 'name', 'address'];
  dataSource = computed(()=>this.libraryDataService.libraries().filter((library)=>library.Cells.FullName.includes(this.searchValue())).map((library=>{return{id:library.Number,name:library.Cells.FullName,address:library.Cells.ObjectAddress[0].Address}})));
  constructor(private libraryDataService:LibraryDataService,private router:Router) {
  }
  search() {
    const query = `?q=${this.searchValue}`
    this.libraryDataService.getLibraries(query)
  }

  clickRow(row:Library) {
    this.router.navigate(['/library']);
  }
}
