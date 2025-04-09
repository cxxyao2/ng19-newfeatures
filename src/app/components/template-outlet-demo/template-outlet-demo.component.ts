import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

export interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-template-outlet-demo',
  imports: [CommonModule],
  templateUrl: './template-outlet-demo.component.html',
  styleUrl: './template-outlet-demo.component.css'
})
export class TemplateOutletDemoComponent implements AfterViewInit {

  @ViewChild('myDialog', { static: true }) myDialog!: ElementRef<HTMLDialogElement>;

  items: Array<Item> = [{
    id: 1,
    name: 'Item 1'
  }, {
    id: 2,
    name: 'Item 2'
  }, {
    id: 3,
    name: 'Item 3'
  }
  ];

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  closeDialog() {
    this.myDialog.nativeElement.close();
  }
  showDialog() {
    this.myDialog.nativeElement.showModal();
  }

}
