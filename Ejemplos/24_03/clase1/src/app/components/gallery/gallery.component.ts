import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.styl'],
  providers:[PhotoService]
})
export class GalleryComponent implements OnInit {

  photos:Array<any>

  constructor(private serv:PhotoService) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos(){
    this.serv.getPhotos().subscribe((response)=>
      this.photos = response.json()
    )
  }

}
