import { Component } from '@angular/core';
import { Ingridient } from '../interfaces/ingridients';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {

  constructor(
    private http: HttpClient
    ) { }

  recipeName = '';
  isVegi = true;

  createIngridient(): void {
    const url = 'https://localhost:7002/api/ingridient';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const newIngridient: Ingridient = {
        ingridientName: this.recipeName,
        isVegetarian: true
    };

    console.log(this.recipeName + this.isVegi);
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


