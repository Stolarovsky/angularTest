import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  date = new Date();
  money = 2.23;

  constructor(private route: ActivatedRoute, private location: Location) { }

  timeObservable$ = new Observable(observer => {
    setInterval(() => observer.next(new Date()), 1000)
  })

  ngOnInit() {
    this.money = + Number(this.route.snapshot.paramMap.get('money'));
  }

  locationBack = () => {
    this.location.back();
  };
}
