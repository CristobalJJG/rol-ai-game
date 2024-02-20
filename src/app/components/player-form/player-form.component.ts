import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Specie } from 'src/app/models/species';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  playerName: string = '';
  playerAge: number = 0;

  selectedSpecie: Specie = { name: '', description: '', abilities: [] };

  species: Specie[] = [];

  async ngOnInit() {

    await axios.get('../../../assets/data/species.json')
      .then((response) => {
        response.data.species.forEach((s: Specie) => {
          this.species.push(s);
        });
      });
    console.log(this.species);
  }


  onSubmit() {
    console.log('Player Name: ' + this.playerName + ' Age: ' + this.playerAge);
  }
}
