import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {
  colors: string[];
  constructor() { 
  this.colors = ['green', 'yellow', 'blue'];
}
changeColor(): string{
  return this.colors[Math.floor(Math.random()*this.colors.length)];
}
}