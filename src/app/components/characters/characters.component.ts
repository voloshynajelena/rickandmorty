import { NgForOf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character, CharacterResponse, HttpService } from '../../services/http.service';

@Component({
  selector: 'app-characters',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './characters.component.html',
  standalone: true,
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  sub: Subscription | undefined;

  constructor(public http: HttpService) {
  }

  ngOnInit(): void {
    this.sub = this.http.getAllCharacters().subscribe(
      (response: CharacterResponse) => {
        this.characters = response.results
      }
    )
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
