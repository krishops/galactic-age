import SpaceTraveler from './../src/galactic-age.js';

describe('SpaceTraveler', () => {

  let msFrizzle;

  beforeEach(() =>  {
    msFrizzle = new SpaceTraveler(34, 78);
  });

  test('should create a SpaceTraveler object', () => {
    expect(msFrizzle.ageEarth).toEqual(34);
    expect(msFrizzle.ageMercury).toEqual(0);
    expect(msFrizzle.ageVenus).toEqual(0);
    expect(msFrizzle.ageMars).toEqual(0);
    expect(msFrizzle.ageJupiter).toEqual(0);
    expect(msFrizzle.lifeExpectancy).toEqual(78);
  });

  test('should return correct age on Mercury', () => {
    expect(msFrizzle.mercuryCalc()).toEqual(142);
  });

  test('should determine life expectancy on Mercury', () => {
    expect(msFrizzle.mercuryLife()).toEqual(325);
  });

  test('should determine how many years left to live on Mercury', () => {
    expect(msFrizzle.mercuryLifeToLive()).toEqual(183);
  })

  test('should determine how many years past life expectancy have been lived on Mercury', () => {
    const msFrizzle = new SpaceTraveler(80, 78);
    expect(msFrizzle.ageEarth).toEqual(80);
    expect(msFrizzle.mercuryLifeToLive()).toEqual(8);
  })
});