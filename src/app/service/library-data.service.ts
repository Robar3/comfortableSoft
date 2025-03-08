import {DestroyRef, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs';
import {Library} from '../components/model/libriaryModel';

@Injectable({
  providedIn: 'root'
})
export class LibraryDataService {

  libraries:WritableSignal<Library[]> = signal([]);
  constructor(private http: HttpClient) {
  }

  getLibraries(q:string ='') {
    this.http.get(`https://apidata.mos.ru/demo/v1/datasets/526/rows${q}`).pipe(tap(res=>console.log(res)))
      .subscribe(res=> this.libraries.set(res as Library[]) )
  }
}
