import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const songs = [
  {
    name: 'Jesus to a child',
    artist: 'George Michael',
  },
  {
    name: 'Earth Song',
    artist: 'Michael Jackson',
  },
  {
    name: 'Besame Mucho',
    artist: 'Andrea Bocelli',
  },
];

const songs$ = of(songs);

songs$
  .pipe(map((songs) => songs.map((song) => song.artist)))
  .subscribe((artist) => console.log(artist)); //?
