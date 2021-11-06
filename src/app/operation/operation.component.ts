import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { OperationModel } from './operation-dash board.model';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  formValue !: FormGroup;
  operationModelObj : OperationModel = new OperationModel();
  operationData !: any;
  constructor(private formbuilber: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilber.group({
      Nom : [''],
      Mot : [''],
      Email : [''],
    
    })
    this.getAllOperation();
  }
  
  postOperationDetails(){
    this.operationModelObj.Nom = this.formValue.value.Nom;
    this.operationModelObj.Mot = this.formValue.value.Mot;
    this.operationModelObj.Email = this.formValue.value.Email;
    
    this.operationModelObj.commentaire = this.formValue.value.commentaire;
    this.operationModelObj.fichier = this.formValue.value.fichier;
 

    this.api.postOperation(this.operationModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Operation Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOperation();
      
    },
    err=>{
      alert("Something Went Wrong")
    })
  }
  getAllOperation(){
    this.api.getOperation()
    .subscribe(res=>{
      this.operationData  = res;
    })
  }
  /*
  deleteOperation(row : any){
    this.api.deleteOperation(row.id)
    .subscribe(res=>{
      Operation("Operation deleted");
      this.getAllOperation();
    })
  }
  onEdit(row: any){
    this.OperationModelObj.id = row.id;
    this.formValue.controls['Intitule'].setValue(row.Intitule);
    this.formValue.controls['Nouveau'].setValue(row.Nouveau);
    this.formValue.controls['Description'].setValue(row.Description);
    this.formValue.controls['Fichier'].setValue(row.Fichier);
    this.formValue.controls['Latitude'].setValue(row.Latitude);
    this.formValue.controls['Longitude'].setValue(row.Longitude);
    this.formValue.controls['Destinataire'].setValue(row.Destinataire);
  }
  updateOperationDetails(){
    
    this.OperationModelObj.Intitule = this.formValue.value.Intitule;
    this.OperationModelObj.Nouveau = this.formValue.value.Nouveau;
    this.OperationModelObj.Description = this.formValue.value.Description;
    this.OperationModelObj.Fichier = this.formValue.value.Fichier;
    this.OperationModelObj.Latitude = this.formValue.value.Latitude;
    this.OperationModelObj.Longitude = this.formValue.value.Longitude;
    this.OperationModelObj.Destinataire = this.formValue.value.Destinataire; 
   
    this.api.updateOperation(this.OperationModelObj,this.OperationModelObj.id)
    .subscribe(res=>{
      Operation("Update Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOperation();
    }) 
  }*/

}
