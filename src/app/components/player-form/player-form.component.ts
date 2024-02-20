import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Class } from 'src/app/models/class';
import { Specie } from 'src/app/models/species';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  playerName: string = '';
  playerAge: number = 0;

  selectedSpecie: Specie | undefined;
  selectedClass: Class | undefined;

  species: Specie[] = [];
  classes: Class[] = [];

  async ngOnInit() {

    await axios.get('../../../assets/data/species.json')
      .then((response) => {
        response.data.species.forEach((s: Specie) => {
          this.species.push(s);
        });
      });
    await axios.get('../../../assets/data/classes.json')
      .then((response) => {
        console.log(response.data);
        response.data.classes.forEach((c: Class) => {
          this.classes.push(c);
        });
      });
  }


  onSubmit() {
    console.log('Player Name: ' + this.playerName + ' Age: ' + this.playerAge);
  }
}
