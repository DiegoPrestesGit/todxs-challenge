import User from '../../database/entities/user'
import CreateUserDTO from '../../models/user/use-cases/create-user'
import IShowUser from '../../models/user/use-cases/show-user'

export default interface IUserRepository {
  findAllUsers: () => Promise<IShowUser[]>
  findById: (id: string) => Promise<IShowUser | undefined>
  findByEmail: (email: string) => Promise<IShowUser | undefined>
  findByCpf: (cpf: string) => Promise<IShowUser | undefined>
  create: (userData: CreateUserDTO) => Promise<User>
}
