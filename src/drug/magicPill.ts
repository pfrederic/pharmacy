import { Drug } from './drug'

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Magic Pill', expiresIn, benefit)
  }

  computeBenefitValue(): void {
    return
  }

  updateBenefitValue(): void {
    this.computeBenefitValue()
  }
}
