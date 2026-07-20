import { Dafalgan, Fervex, HerbalTea, MagicPill } from './index'
import { IDrug } from './interface'

export class Drug implements IDrug {
  protected constructor(
    public readonly name: string,
    public expiresIn: number,
    public benefit: number,
  ) {}

  static createDrug(name: string, expiresIn: number, benefit: number): Drug {
    switch (name) {
      case 'Dafalgan':
        return new Dafalgan(expiresIn, benefit)
      case 'Fervex':
        return new Fervex(expiresIn, benefit)
      case 'Herbal Tea':
        return new HerbalTea(expiresIn, benefit)
      case 'Magic Pill':
        return new MagicPill(expiresIn, benefit)
      default:
        break
    }
    return new Drug(name, expiresIn, benefit)
  }

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
