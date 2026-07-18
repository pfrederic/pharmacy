import { IDrug } from './interface'

export class Drug implements IDrug {
  constructor(
    public readonly name: string,
    public expiresIn: number,
    public benefit: number,
  ) {}

  computeBenefitValue(): void {
    if (this.expiresIn > 0) {
      this.benefit = this.benefit - 1
    } else {
      this.benefit = this.benefit - 2
    }
  }

  updateBenefitValue(): void {
    this.computeBenefitValue()
    this.expiresIn = this.expiresIn - 1
    if (this.benefit < 0) {
      this.benefit = 0
    }
    if (this.benefit > 50) {
      this.benefit = 50
    }
  }
}
