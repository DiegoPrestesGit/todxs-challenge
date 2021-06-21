import User from '../../database/entities/user'
import ICreateUser from '../../use-cases/user/icreate-user'

export default interface IUserRepository {
  findAllUsers: () => Promise<User[]>
  findById: (id: string) => Promise<User | undefined>
  findByEmail: (email: string) => Promise<User | undefined>
  findByCpf: (cpf: string) => Promise<User | undefined>
  create: (userData: ICreateUser) => Promise<User>
  save: (user: User) => Promise<User>
}
