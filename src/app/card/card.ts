export class Card {
  name:           string;
  attribute:      string;
  type:           string;
  racesOrTraits:  string[];
  text:           string;
  set:            string;
  code:           string;
  rarity:         string;
  thumbnailImage: string;
  cardImage:      string;
}

export class Cluster{
    id: number;
  name: string;
  sets: string[];

}

export class Format{
  id:      number;
  name:    string;
  sets:    string[];
  banlist: string[]
}