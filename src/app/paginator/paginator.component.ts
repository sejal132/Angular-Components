import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() numberofpages;
  @Output() pageNumberClicked=new EventEmitter<number>();
  pages:number[];

  constructor() { }

  ngOnInit(): void {
    this.pages=new Array(this.numberofpages);
    console.log(this.numberofpages);
    
  }
  pageNumberClickedMethod(pageNumber){
    this.pageNumberClicked.emit(pageNumber);
  }

}
