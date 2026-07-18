import { Drug } from './drug/drug'

export class Pharmacy {
  constructor(private drugs: Drug[] = []) {}
  updateBenefitValue() {
    this.drugs.map(drug => {
      drug.updateBenefitValue()
    })

    return this.drugs
  }
}
