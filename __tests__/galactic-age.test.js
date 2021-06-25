import SpaceTraveler from './../src/galactic-age.js';

describe('SpaceTraveler', () => {

  let msFrizzle;

  beforeEach(() =>  {
    msFrizzle = new SpaceTraveler(34, 0, 0, 0, 0, 78);
  });

  test('should create a SpaceTraveler object', () => {
    expect(msFrizzle.ageEarth).toEqual(34);
    expect(msFrizzle.ageMercury).toEqual(0);
    expect(msFrizzle.ageVenus).toEqual(0);
    expect(msFrizzle.ageMars).toEqual(0);
    expect(msFrizzle.ageJupiter).toEqual(0);
    expect(msFrizzle.lifeExpectancy).toEqual(78);
  });
});