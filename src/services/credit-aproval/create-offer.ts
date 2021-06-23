import HttpResponse from '../../utils/http'
import User from '../../database/entities/user'
import { ok } from '../../utils/http-helpers'
import {
  ICreditOffer,
  IAvailableInstallment
} from '../../use-cases/credit-aproval/icredit-offer'

export default class CreateOfferService {
  public async execute(user: User): Promise<HttpResponse> {
    const { averageMonthlyExpense, averageMonthlyIncome, serasaScore } = user
    const installmentNumbers = [6, 12, 24, 36, 48]
    const availableMoney = averageMonthlyIncome - averageMonthlyExpense
    const usableMoney =
      serasaScore >= 900 ? availableMoney * 0.9 : availableMoney * 0.65
    const availableAmounts = [
      3000, 8000, 12000, 15000, 20000, 25000, 28000, 30000, 34000, 38000, 41000,
      48000, 50000
    ]

    let interestRate = 4.15
    if (serasaScore > 900) interestRate = 3.8
    if (serasaScore >= 700 && serasaScore < 900) interestRate = 3.95
    if (serasaScore > 300 && serasaScore < 700) interestRate = 4.05

    const goodOffers: ICreditOffer[] = []

    for (const amount of availableAmounts) {
      const possibleOffers: IAvailableInstallment[] = []
      let previouslyInstallment: any

      for (let i = 0; i < installmentNumbers.length; i++) {
        const firstFullTaxedAmount =
          amount * Math.pow(1 + interestRate / 100, installmentNumbers[i])
        const firstInstallment = firstFullTaxedAmount / installmentNumbers[i]
        if (firstInstallment > usableMoney) break

        if (!previouslyInstallment) {
          previouslyInstallment = firstInstallment
        } else {
          if (previouslyInstallment >= firstInstallment) break
        }
        const installmentTable: number[] = []
        installmentTable.push(firstInstallment)
        for (let j = 1; j < installmentNumbers[i]; j++) {
          const newFullAmount =
            (firstFullTaxedAmount - firstInstallment) *
            Math.pow(1 + interestRate / 100, installmentNumbers[i])

          const newInstallment = newFullAmount / (installmentNumbers[i] - j)
          installmentTable.push(newInstallment)
        }
        const totalToPay = installmentTable.reduce(
          (total, number) => (total += number)
        )

        possibleOffers.push({
          installmentTable,
          numberOfInstallments: installmentNumbers[i],
          totalToPay
        })
      }
      previouslyInstallment = undefined
      goodOffers.push({
        availableAmount: amount,
        possibleOffers: possibleOffers
      })
    }
    return ok({ goodOffers })
  }
}
