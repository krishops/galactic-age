export default class SpaceTraveler  {
  constructor(ageEarth, lifeExpectancy)  {
    this.ageEarth = ageEarth;
    this.ageMercury = 0;
    this.ageVenus = 0;
    this.ageMars = 0;
    this.ageJupiter = 0;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryCalc()  {
    let ageMercury = Math.round(this.ageEarth / 0.24);
      return ageMercury;
  }  

  mercuryLife() {
    let mercuryLifeExpectancy = Math.round(this.lifeExpectancy / 0.24);
      return mercuryLifeExpectancy
  }
}