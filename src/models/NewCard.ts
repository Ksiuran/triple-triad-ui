class NewCard {

  id: number;
  name: string;
  description: string;
  stars: number;
  img: string;

  constructor(id: number, name: string, description: string, stars: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.img = `https://triad.raelys.com/images/cards/large/${id}.png`;
  }
}

export default NewCard;
