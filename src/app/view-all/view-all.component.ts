import { Component, OnInit } from '@angular/core';
import { ServicePosteService } from '../service-poste.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-all',
  imports: [MatSnackBarModule ,     MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
    MatSnackBarModule , RouterModule , MatGridListModule , HttpClientModule ],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent implements OnInit {
  allposts : any[] = [] ;
  constructor(private posteService : ServicePosteService , private snackbar :MatSnackBar) { }
  ngOnInit(): void {
    this.getAllPostes();
  }
  getAllPostes() {
    this.posteService.getAllPostes().subscribe((response) => {
      console.log(response);
      if(typeof response === 'string'){
        this.allposts = JSON.parse(response);
      }
      else if (Array.isArray(response)) {
      this.allposts = response;
    }}, (error: any) => {
      this.snackbar.open('voir tous les postes', 'fermer');

  }

    )}
}

