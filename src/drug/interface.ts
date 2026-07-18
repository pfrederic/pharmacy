export interface IDrug {
  readonly name: string
  expiresIn: number
  benefit: number
  computeBenefitValue(): void
  updateBenefitValue(): void
}
