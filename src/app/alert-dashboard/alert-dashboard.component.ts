import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { AlertModel } from './alert-dash board.model';

@Component({
  selector: 'app-alert-dashboard',
  templateUrl: './alert-dashboard.component.html',
  styleUrls: ['./alert-dashboard.component.css']
})
export class AlertDashboardComponent implements OnInit {

  formValue !: FormGroup;
  alertModelObj : AlertModel = new AlertModel();
  alertData !: any;
  constructor(private formbuilber: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      Intitule : [''],
      Nouveau : [''],
      Description : [''],
      Fichier : [''],
      Latitude : [''],
      Longitude : [''],
      Destinataire : ['']
    })
    this.getAllAlert();
  }

  

  postAlertDetails(){
    this.alertModelObj.Intitule = this.formValue.value.Intitule;
    this.alertModelObj.Nouveau = this.formValue.value.Nouveau;
    this.alertModelObj.Description = this.formValue.value.Description;
    this.alertModelObj.Fichier = this.formValue.value.Fichier;
    this.alertModelObj.Latitude = this.formValue.value.Latitude;
    this.alertModelObj.Longitude = this.formValue.value.Longitude;
    this.alertModelObj.Destinataire = this.formValue.value.Destinataire;

    this.api.postAlert(this.alertModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Alert Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllAlert();
      
    },
    err=>{
      alert("Something Went Wrong")
    })
  }
  getAllAlert(){
    this.api.getAlert()
    .subscribe(res=>{
      this.alertData = res;
    })
  }
  deleteAlert(row : any){
    this.api.deleteAlert(row.id)
    .subscribe(res=>{
      alert("Alert deleted");
      this.getAllAlert();
    })
  }
  onEdit(row: any){
    this.alertModelObj.id = row.id;
    this.formValue.controls['Intitule'].setValue(row.Intitule);
    this.formValue.controls['Nouveau'].setValue(row.Nouveau);
    this.formValue.controls['Description'].setValue(row.Description);
    this.formValue.controls['Fichier'].setValue(row.Fichier);
    this.formValue.controls['Latitude'].setValue(row.Latitude);
    this.formValue.controls['Longitude'].setValue(row.Longitude);
    this.formValue.controls['Destinataire'].setValue(row.Destinataire);
  }
  updateAlertDetails(){
    
    this.alertModelObj.Intitule = this.formValue.value.Intitule;
    this.alertModelObj.Nouveau = this.formValue.value.Nouveau;
    this.alertModelObj.Description = this.formValue.value.Description;
    this.alertModelObj.Fichier = this.formValue.value.Fichier;
    this.alertModelObj.Latitude = this.formValue.value.Latitude;
    this.alertModelObj.Longitude = this.formValue.value.Longitude;
    this.alertModelObj.Destinataire = this.formValue.value.Destinataire; 
   
    this.api.updateAlert(this.alertModelObj,this.alertModelObj.id)
    .subscribe(res=>{
      alert("Update Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllAlert();
    }) 
  }

}
 