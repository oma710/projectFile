import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormComponent} from "../form/form.component";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  closeResult = '';
  @Output() added = new EventEmitter();
  @Input() titre : string = "";
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }



  open(aff : any) {
    const ref = this.modalService.open(FormComponent, {ariaLabelledBy: 'modal-basic-title',centered : true})
  const a = aff;
    ref.dismissed.subscribe(res=>{
      a.ngOnInit()

      this.added.emit()

    })

  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

