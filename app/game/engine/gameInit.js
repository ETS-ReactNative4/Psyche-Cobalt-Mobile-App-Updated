import { ENGINE, WORLD } from './physicsInit.js';
import { PsycheRover, PsycheRover_Matter } from './renderers/PsycheRover.js';

// NOTE :: RNGE - DEFAULT ENTITIES
export const defaultEntities = () => {
  return {
    physics: {
      engine: ENGINE,
      world: WORLD
    },
    player: {
      health: 100,
      score: 0,
      level: 0
    },
    created: {
      createdAsteroids: [],
      createdClearScreens: [],
      createdHealths: [],
      createdClocks: []
    },
    destroy: {
      destroyAsteroids: []
    },
    psycheRover: {
      body: PsycheRover_Matter,
      renderer: PsycheRover
    }
  };
};
