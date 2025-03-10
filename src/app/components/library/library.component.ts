import {Component, computed} from '@angular/core';
import {LibraryDataService} from '../../service/library-data.service';
import {Cells} from '../model/libriaryModel';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-library',
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.sass'
})
export class LibraryComponent {

  libraries;
  constructor(public libraryDataService:LibraryDataService,private route: ActivatedRoute) {
    const id = +this.route.snapshot.params['id']
    this.libraries = computed(()=>this.parsingLibraryData(libraryDataService.libraries().find(library=>library.global_id===id)?.Cells))
  }

  parsingLibraryData(cells:Cells|undefined){
    if (cells===undefined)return
    return [
      ["Категория",cells.Category],
      ["Название",cells.CommonName],
      ["Полное название",cells.FullName],
      ["Сокращенное название",cells.ShortName],
      ["ИНН",cells.OrgInfo[0]?.INN],
      ["Адрес объекта",cells.ObjectAddress[0]?.Address],
      ["Руководящая организация",cells.ChiefOrg],
      ["Имя руководителя",cells.ChiefName],
      ["Должность руководителя",cells.ChiefPosition],
      ["Контактный телефон",cells.PublicPhone[0]?.PublicPhone],
      ["Факс",cells.Fax[0]?.Fax],
      ["Электронная почта",cells.Email[0]?.Email],
      ["Часы работы",""],
      [cells.WorkingHours[0].DayWeek,cells.WorkingHours[0].WorkHours],
      [cells.WorkingHours[1].DayWeek,cells.WorkingHours[1].WorkHours],
      [cells.WorkingHours[2].DayWeek,cells.WorkingHours[2].WorkHours],
      [cells.WorkingHours[3].DayWeek,cells.WorkingHours[3].WorkHours],
      [cells.WorkingHours[4].DayWeek,cells.WorkingHours[4].WorkHours],
      [cells.WorkingHours[5].DayWeek,cells.WorkingHours[5].WorkHours],
      [cells.WorkingHours[6].DayWeek,cells.WorkingHours[6].WorkHours],
      ["Веб-сайт",cells.WebSite],
      ["Количество мест",cells.NumOfSeats],
      ["Количество читателей",cells.NumOfReaders],
      ["Количество посетителей",cells.NumOfVisitors]
    ]
  }
}
