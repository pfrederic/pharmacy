import { Drug, Pharmacy } from '@/index'

describe('Pharmacy', () => {
  describe('normal drugs', () => {
    it('should decrease the benefit and expiresIn by 1 each day', () => {
      expect(
        new Pharmacy([Drug.createDrug('test', 2, 3)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('test', 1, 2)])
    })

    it('should degrade benefit twice as fast once expiration date has passed', () => {
      expect(
        new Pharmacy([Drug.createDrug('test', 0, 6)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('test', -1, 4)])
    })

    it('should never let benefit go below 0', () => {
      expect(
        new Pharmacy([Drug.createDrug('test', 5, 0)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('test', 4, 0)])
    })

    it('should never let benefit go below 0 even when expired and degrading twice as fast', () => {
      expect(
        new Pharmacy([Drug.createDrug('test', 0, 1)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('test', -1, 0)])
    })
  })

  describe('Herbal Tea', () => {
    it('should increase benefit as it gets older', () => {
      expect(
        new Pharmacy([
          Drug.createDrug('Herbal Tea', 2, 3),
        ]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Herbal Tea', 1, 4)])
    })

    it('should increase benefit twice as fast after expiration date', () => {
      expect(
        new Pharmacy([
          Drug.createDrug('Herbal Tea', 0, 3),
        ]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Herbal Tea', -1, 5)])
    })

    it('should never let benefit exceed 50', () => {
      expect(
        new Pharmacy([
          Drug.createDrug('Herbal Tea', 2, 49),
        ]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Herbal Tea', 1, 50)])
    })

    it('should never let benefit exceed 50 even when increasing twice as fast', () => {
      expect(
        new Pharmacy([
          Drug.createDrug('Herbal Tea', 0, 49),
        ]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Herbal Tea', -1, 50)])
    })
  })

  describe('Magic Pill', () => {
    it('should never decrease in benefit nor change expiresIn', () => {
      expect(
        new Pharmacy([
          Drug.createDrug('Magic Pill', 5, 10),
        ]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Magic Pill', 5, 10)])
    })

    it('should never decrease in benefit nor change expiresIn even when already expired', () => {
      expect(
        new Pharmacy([
          Drug.createDrug('Magic Pill', -5, 10),
        ]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Magic Pill', -5, 10)])
    })
  })

  describe('Fervex', () => {
    it('should increase benefit by 1 when there are more than 10 days left', () => {
      expect(
        new Pharmacy([Drug.createDrug('Fervex', 11, 20)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Fervex', 10, 21)])
    })

    it('should increase benefit by 2 when there are 10 days or less', () => {
      expect(
        new Pharmacy([Drug.createDrug('Fervex', 10, 20)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Fervex', 9, 22)])
    })

    it('should increase benefit by 3 when there are 5 days or less', () => {
      expect(
        new Pharmacy([Drug.createDrug('Fervex', 5, 20)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Fervex', 4, 23)])
    })

    it('should never let benefit exceed 50', () => {
      expect(
        new Pharmacy([Drug.createDrug('Fervex', 5, 49)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Fervex', 4, 50)])
    })

    it('should drop benefit to 0 once expiration date has passed', () => {
      expect(
        new Pharmacy([Drug.createDrug('Fervex', 0, 30)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Fervex', -1, 0)])
    })
  })

  describe('Dafalgan', () => {
    it('should degrade benefit twice as fast as normal drugs', () => {
      expect(
        new Pharmacy([Drug.createDrug('Dafalgan', 5, 10)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Dafalgan', 4, 8)])
    })

    it('should degrade benefit four times as fast once expiration date has passed', () => {
      expect(
        new Pharmacy([Drug.createDrug('Dafalgan', 0, 10)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Dafalgan', -1, 6)])
    })

    it('should never let benefit go below 0', () => {
      expect(
        new Pharmacy([Drug.createDrug('Dafalgan', 5, 1)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Dafalgan', 4, 0)])
    })

    it('should never let benefit go below 0 even when expired and degrading four times as fast', () => {
      expect(
        new Pharmacy([Drug.createDrug('Dafalgan', 0, 3)]).updateBenefitValue(),
      ).toEqual([Drug.createDrug('Dafalgan', -1, 0)])
    })
  })
})
