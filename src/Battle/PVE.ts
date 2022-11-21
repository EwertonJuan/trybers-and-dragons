import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemies: SimpleFighter[];
  
  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._enemies = enemies;
  }

  fight(): number {
    let remainingEnemies = this._enemies;

    while (this.player.lifePoints > -1 && remainingEnemies.length > 0) {
      remainingEnemies.forEach((enemy) => { this.player.attack(enemy); });
      remainingEnemies.forEach((enemy) => { enemy.attack(this.player); });
      remainingEnemies = remainingEnemies
        .filter((enemy) => enemy.lifePoints > -1);
    }
    return super.fight();
  }
}