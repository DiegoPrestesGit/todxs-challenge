export default class User {
  public readonly id: string
  name: string
  email: string
  password: string
  cpf: string
  averageMonthlyIncome: number
  averageMonthlyExpense: number

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    cpf: string,
    averageMonthlyIncome: number,
    averageMonthlyExpense: number
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.cpf = cpf
    this.averageMonthlyIncome = averageMonthlyIncome
    this.averageMonthlyExpense = averageMonthlyExpense
  }
}
