import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ingridient } from 'src/app/interfaces/ingridients';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './dialog.add.component.html',
  styleUrls: ['./dialog.add.component.scss']
})
export class DialogAddComponent {

  constructor(
    private http: HttpClient
    ) { }

  itemName = '';
  isVegi = true;

  createIngridient(): void {
    const url = 'https://localhost:7002/api/ingridient';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const newIngridient: Ingridient = {
        ingridientName: this.itemName,
        isVegetarian: true
    };

    console.log(this.itemName + this.isVegi);
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


