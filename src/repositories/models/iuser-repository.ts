import User from '../../database/entities/user'
import ICreateUser from '../../use-cases/user/icreate-user'
import IShowUser from '../../use-cases/user/ishow-user'

export default interface IUserRepository {
  findAllUsers: () => Promise<IShowUser[]>
  findById: (id: string) => Promise<User | undefined>
  findByEmail: (email: string) => Promise<User | undefined>
  findByCpf: (cpf: string) => Promise<User | undefined>
  create: (userData: ICreateUser) => Promise<User>
  save: (user: User) => Promise<User>
}
