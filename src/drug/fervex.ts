import { Drug } from './drug'

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Fervex', expiresIn, benefit)
  }

  computeBenefitValue(): void {
    if (this.expiresIn > 0) {
      this.benefit = this.benefit + 1
      if (this.expiresIn <= 10) {
        this.benefit = this.benefit + 1
      }
      if (this.expiresIn <= 5) {
        this.benefit = this.benefit + 1
      }
    } else {
      this.benefit = 0
    }
  }
}
