import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePosteService } from '../service-poste.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SericeCommentService } from '../serice-comment.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-post',
  imports: [ MatSnackBarModule , MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
    MatSnackBarModule ,  MatGridListModule , FormsModule , ReactiveFormsModule  ,
   ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
 
})
export class ViewPostComponent implements OnInit{
  constructor(private activatedRoute : ActivatedRoute, private posteService: ServicePosteService , private snackBar: MatSnackBar,private fb : FormBuilder , private service : SericeCommentService) { }
  posteId : any
  formComment !: FormGroup
  comments : any
  postInfo : any
  ngOnInit(): void {
    this.posteId = this.activatedRoute.snapshot.params['id']
    this.formComment = this.fb.group({
      postedBy : [null , Validators.required],
      content : [null , Validators.required]
    }) 
    if(this.posteId){
      this.getPostInfo()
     
    }
  }
  getPostInfo(){
    this.posteService.getPosteById(this.posteId).subscribe(response => {
      if(typeof response === 'string'){
        this.postInfo = JSON.parse(response);
        console.log(this.postInfo)
      }
      else{
        this.postInfo = response;
        console.log(this.postInfo)
      }
      this.postInfo.likeCount ;
      this.getAllComments()
      
  },error => {
    this.snackBar.open('il y a une erreur dans la récupération de l\'article', 'Fermer') 

}
  )}
  likePost(){
      this.posteService.likePost(this.posteId).subscribe(()=> {
      this.snackBar.open('Vous avez aimé cet article', 'aimé')
      this.postInfo.likeCount += 1;
    },error => {
      this.snackBar.open('il y a une erreur dans la récupération de l\'article', 'Fermer') 
    })
  }
  createComment(){
    const postedBy = this.formComment.get('postedBy')?.value
    const content = this.formComment.get('content')?.value
    this.service.createComment(this.posteId , postedBy, content).subscribe( () => {
      this.snackBar.open('Votre commentaire a été ajouté avec succès', 'Fermer')
      this.getAllComments()
    },error => {
      this.snackBar.open('il y a une erreur dans la récupération de l\'article', 'Fermer') 
    })

  }
  getAllComments(){
    this.service.getAllComments(this.posteId).subscribe( respo => {
      this.comments = respo;
      console.log(this.comments)
    }, () => { 
      this.snackBar.open('il y a une erreur dans la récupération de l\'article', 'Fermer')
    })
  }
}
//on recupere lide de lartcile on recupere this.
//this.postFormGroup.
  
