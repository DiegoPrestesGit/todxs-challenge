export class ServerError extends Error {
  constructor(stack: string | undefined) {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}

export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}
