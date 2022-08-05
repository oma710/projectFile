import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FileService} from "../services/file.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {





  files: File[] = [];
  onSelect(event:any) {
     console.log(event);
     this.files.push(...event.addedFiles);

     /*
     this.fileName = event.addedFiles[0].name;
     this.fileDate = event.addedFiles[0].lastModifiedDate;
     this.fileZise = event.addedFiles[0].size;
     console.log(this.fileName);
     console.log(this.fileDate);
     console.log(this.fileZise);
  */

  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor(public  modal : NgbActiveModal,private fileService : FileService,private _router: Router) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.dismiss()
  }

  save(){
     this.fileService.uploadFile(this.files[0]).subscribe(data=>{
          this.close();

     })
  }

}
