import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../interfaces/ingridients';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component'

@Component({
  selector: 'app-search-ingridient',
  templateUrl: './search-ingridient.component.html',
  styleUrls: ['./search-ingridient.component.scss']
})
export class SearchIngridientComponent implements OnInit {
  placeholderIngridient = 'Knoblauch';
  ingridients: Array<Ingridient> = [];
  selectedIngridient: Ingridient | null = null;

  constructor(
    private http: HttpClient,
    private matDialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.matDialog.open(DialogBodyComponent,{width: '350px',})
  }

  searchIngridient(): void {
    const url = 'https://localhost:7002/api/ingridient/search';

    const headers = new HttpHeaders()
        .set('accept', 'application/json');

    const params = new HttpParams()
        .set('ingridientName', this.placeholderIngridient)

    this.http.get<Ingridient[]>(url, {headers,params}).subscribe({
        next: (ingridient) => {
            this.ingridients = ingridient;
        },
        error: (err) => {
            console.error('Error', err);
        }
    });
    console.log("Get all finished");
  }

  selectIngridient(f: Ingridient): void {
    this.selectedIngridient = f;
  }

  createIngridient(): void {
    const url = 'https://localhost:7002/api/ingridient';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const newIngridient: Ingridient = {
        ingridientName: "Apfel",
        isVegetarian: true 
    };

    this.http.post<Ingridient>(url, newIngridient, { headers }).subscribe({
        next: (ingridient) => {
            console.debug('Neue Id: ', ingridient.id);
        },
        error: (err) => {
            console.error('Error', err);
        }
    });
}

}
