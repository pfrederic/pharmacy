import { Drug } from './drug'

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Dafalgan', expiresIn, benefit)
  }

  computeBenefitValue(): void {
    if (this.expiresIn > 0) {
      this.benefit = this.benefit - 2
    } else {
      this.benefit = this.benefit - 4
    }
  }
}
