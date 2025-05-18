import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ServicePosteService } from '../../service-poste.service';


@Component({
  selector: 'app-create-post',
  imports: [ 
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  standalone: true,
})

export class CreatePostComponent implements OnInit {
  postForm !: FormGroup 
  tags : String[]=[];
  constructor(private fb : FormBuilder ,private router : Router ,private snackbar : MatSnackBar ,private posteService : ServicePosteService) { }
  ngOnInit(): void {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, Validators.required],
      img: [null, Validators.required],
      postedBy: [null, Validators.required]
    });
  }
  add(evenement : any) : void {
    const value = (evenement.value || '').trim();
    if(value){
      this.tags.push(value)
    }
    evenement.chipInput!.clear();
  }
  remove(tags : any) : void {
    const index = this.tags.indexOf(tags);
    if(index >= 0){
      this.tags.splice(index , 1);
  }
}
createPoste() {
  const data = this.postForm.value;
  data.tags = this.tags;
  return this.posteService.createPoste(data).subscribe(resp =>{
    this.snackbar.open('votre poste est bien crée', 'OK')
    this.router.navigateByUrl('/')} , 
    error=>{
      this.snackbar.open('erreur de creation de poste', 'Essayez encore')
      this.router.navigateByUrl('createpost')
    })
  }
  
}