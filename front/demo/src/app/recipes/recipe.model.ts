import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public repId:number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingedients: Ingredient[];
  constructor(name: string, desc: string, imagePath: string, ingedients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingedients = ingedients;
  }
}
