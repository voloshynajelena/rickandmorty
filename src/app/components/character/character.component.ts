import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Character, HttpService } from '../../services/http.service';

@Component({
  selector: 'app-character',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './character.component.html',
  standalone: true,
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http.getCharacterById(id).subscribe(
        data => this.character = data
      )
    }
  }
}
