import { Injectable } from '@angular/core';

@Injectable()
export class LevelUpdateService {

  constructor() { }
  serviceLevel: string;

  getLevel() {
    return this.serviceLevel;
  }

  setLevel(Level) {
    return this.serviceLevel = Level;
  }
}
