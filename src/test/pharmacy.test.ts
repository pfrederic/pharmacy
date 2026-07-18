import { Drug, Dafalgan, Fervex, HerbalTea, MagicPill, Pharmacy } from '@/index'

describe('Pharmacy', () => {
  describe('normal drugs', () => {
    it('should decrease the benefit and expiresIn by 1 each day', () => {
      expect(
        new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue(),
      ).toEqual([new Drug('test', 1, 2)])
    })

    it('should degrade benefit twice as fast once expiration date has passed', () => {
      expect(
        new Pharmacy([new Drug('test', 0, 6)]).updateBenefitValue(),
      ).toEqual([new Drug('test', -1, 4)])
    })

    it('should never let benefit go below 0', () => {
      expect(
        new Pharmacy([new Drug('test', 5, 0)]).updateBenefitValue(),
      ).toEqual([new Drug('test', 4, 0)])
    })

    it('should never let benefit go below 0 even when expired and degrading twice as fast', () => {
      expect(
        new Pharmacy([new Drug('test', 0, 1)]).updateBenefitValue(),
      ).toEqual([new Drug('test', -1, 0)])
    })
  })

  describe('Herbal Tea', () => {
    it('should increase benefit as it gets older', () => {
      expect(new Pharmacy([new HerbalTea(2, 3)]).updateBenefitValue()).toEqual([
        new HerbalTea(1, 4),
      ])
    })

    it('should increase benefit twice as fast after expiration date', () => {
      expect(new Pharmacy([new HerbalTea(0, 3)]).updateBenefitValue()).toEqual([
        new HerbalTea(-1, 5),
      ])
    })

    it('should never let benefit exceed 50', () => {
      expect(new Pharmacy([new HerbalTea(2, 49)]).updateBenefitValue()).toEqual(
        [new HerbalTea(1, 50)],
      )
    })

    it('should never let benefit exceed 50 even when increasing twice as fast', () => {
      expect(new Pharmacy([new HerbalTea(0, 49)]).updateBenefitValue()).toEqual(
        [new HerbalTea(-1, 50)],
      )
    })
  })

  describe('Magic Pill', () => {
    it('should never decrease in benefit nor change expiresIn', () => {
      expect(new Pharmacy([new MagicPill(5, 10)]).updateBenefitValue()).toEqual(
        [new MagicPill(5, 10)],
      )
    })

    it('should never decrease in benefit nor change expiresIn even when already expired', () => {
      expect(
        new Pharmacy([new MagicPill(-5, 10)]).updateBenefitValue(),
      ).toEqual([new MagicPill(-5, 10)])
    })
  })

  describe('Fervex', () => {
    it('should increase benefit by 1 when there are more than 10 days left', () => {
      expect(new Pharmacy([new Fervex(11, 20)]).updateBenefitValue()).toEqual([
        new Fervex(10, 21),
      ])
    })

    it('should increase benefit by 2 when there are 10 days or less', () => {
      expect(new Pharmacy([new Fervex(10, 20)]).updateBenefitValue()).toEqual([
        new Fervex(9, 22),
      ])
    })

    it('should increase benefit by 3 when there are 5 days or less', () => {
      expect(new Pharmacy([new Fervex(5, 20)]).updateBenefitValue()).toEqual([
        new Fervex(4, 23),
      ])
    })

    it('should never let benefit exceed 50', () => {
      expect(new Pharmacy([new Fervex(5, 49)]).updateBenefitValue()).toEqual([
        new Fervex(4, 50),
      ])
    })

    it('should drop benefit to 0 once expiration date has passed', () => {
      expect(new Pharmacy([new Fervex(0, 30)]).updateBenefitValue()).toEqual([
        new Fervex(-1, 0),
      ])
    })
  })

  describe('Dafalgan', () => {
    it('should degrade benefit twice as fast as normal drugs', () => {
      expect(new Pharmacy([new Dafalgan(5, 10)]).updateBenefitValue()).toEqual([
        new Dafalgan(4, 8),
      ])
    })

    it('should degrade benefit four times as fast once expiration date has passed', () => {
      expect(new Pharmacy([new Dafalgan(0, 10)]).updateBenefitValue()).toEqual([
        new Dafalgan(-1, 6),
      ])
    })

    it('should never let benefit go below 0', () => {
      expect(new Pharmacy([new Dafalgan(5, 1)]).updateBenefitValue()).toEqual([
        new Dafalgan(4, 0),
      ])
    })

    it('should never let benefit go below 0 even when expired and degrading four times as fast', () => {
      expect(new Pharmacy([new Dafalgan(0, 3)]).updateBenefitValue()).toEqual([
        new Dafalgan(-1, 0),
      ])
    })
  })
})
