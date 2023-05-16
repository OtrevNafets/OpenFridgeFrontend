import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchIngridientComponent } from './search-ingridient/search-ingridient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule} from '@angular/material/slider';
import { ChipsComponent } from './shared_module/chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list'
import { DialogAddComponent } from './shared_module/dialogs/add-dialog/dialog.add.component';

const myRoutes: Routes = [
  {path: 'ingridients', component: SearchIngridientComponent},
  {path: 'recipes', component: SearchRecipeComponent},
  {path: 'evaluation', component: EvaluationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchIngridientComponent,
    DialogBodyComponent,
    NavbarComponent,
    SidebarComponent,
    SearchRecipeComponent,
    EvaluationComponent,
    SliderComponent,
    ChipsComponent,
    DialogAddComponent
  ],
  imports: [
    RouterModule.forRoot(myRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule,
    MatListModule
  ],

  exports: [
    SliderComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
