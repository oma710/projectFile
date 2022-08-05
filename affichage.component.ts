import { Component, OnInit } from '@angular/core';
import {FileService} from "../services/file.service";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
   listFiles:any = [];
   p=0;
   size = 10;
  constructor(private fileService : FileService) { }

  public ngOnInit(): void {
    this.fileService.getFiles().subscribe(data=>{
       this.listFiles = data['content'] ;
       console.log(this.listFiles);
    })
  }

}
