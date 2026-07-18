import { Drug } from './drug'

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Herbal Tea', expiresIn, benefit)
  }

  computeBenefitValue(): void {
    if (this.expiresIn > 0) {
      this.benefit = this.benefit + 1
    } else {
      this.benefit = this.benefit + 2
    }
  }
}
