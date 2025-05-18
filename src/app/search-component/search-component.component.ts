import th from '@angular/common/locales/th';
import { Component } from '@angular/core';
import { ServicePosteService } from '../service-poste.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-search-component',
  imports: [FormsModule ,MatSnackBarModule , MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
    MatSnackBarModule , RouterModule , MatGridListModule , MatDividerModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
  listOfPost : any 
  searchValue : string = ''
  constructor(private posteService : ServicePosteService , private snack: MatSnackBar){}
  searchPost(){
    return this.posteService.getPostSearch(this.searchValue).subscribe(res =>{
      if(typeof res==='string'){
        this.listOfPost = JSON.parse(res);
      }
      else{
        this.listOfPost = res;
      }
    } , error => {
      this.snack.open('il y a une erreur dans la récupération de l\'article', 'Fermer')
    })
  }
}
