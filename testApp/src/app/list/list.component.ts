import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  films: Film[] = [];

  constructor(private fS: FilmsService) { }

  ngOnInit(): void {
    this.films = this.fS.getAll();
    console.table(this.films)
  }

}
