export interface IAvailableInstallment {
  installmentTable: number[]
  numberOfInstallments: number
  totalToPay: number
}

export interface ICreditOffer {
  availableAmount: number
  possibleOffers: IAvailableInstallment[]
}
