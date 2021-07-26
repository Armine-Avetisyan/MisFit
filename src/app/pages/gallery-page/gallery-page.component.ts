import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() hide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
