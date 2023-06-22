import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../models/films';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  film: Film;

  constructor(private route: ActivatedRoute, private fs: FilmsService, private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.film = this.fs.getById(id);
  }

  back() {
    this.location.back();
  }

}
