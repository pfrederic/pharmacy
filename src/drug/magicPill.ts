import { Drug } from './drug'

export class MagicPill implements Drug {
  readonly name: string = 'Magic Pill'
  expiresIn: number
  benefit: number
  constructor(expiresIn: number, benefit: number) {
    this.expiresIn = expiresIn
    this.benefit = benefit
  }

  computeBenefitValue(): void {
    return
  }

  updateBenefitValue(): void {
    this.computeBenefitValue()
  }
}
