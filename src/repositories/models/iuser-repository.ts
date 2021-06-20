import User from '../../database/entities/user'
import ICreateUser from '../../use-cases/user/icreate-user'
import IShowUser from '../../use-cases/user/ishow-user'

export default interface IUserRepository {
  findAllUsers: () => Promise<IShowUser[]>
  findById: (id: string) => Promise<IShowUser | undefined>
  findByEmail: (email: string) => Promise<IShowUser | undefined>
  findByCpf: (cpf: string) => Promise<IShowUser | undefined>
  create: (userData: ICreateUser) => Promise<User>
}
