import { getRepository, Repository } from 'typeorm'
import User from '../database/entities/user'
import ICreateUser from '../use-cases/user/icreate-user'
import IShowUser from '../use-cases/user/ishow-user'
import IUserRepository from './models/iuser-repository'

export default class UserRepository implements IUserRepository {
  private readonly ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async findAllUsers(): Promise<IShowUser[]> {
    const users = await this.ormRepository.find()
    return users
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { id } })
    return user
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } })
    return user
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { cpf } })
    return user
  }

  public async create(userData: ICreateUser): Promise<User> {
    const user = this.ormRepository.create(userData)
    await this.ormRepository.save(user)
    return user
  }

  public async save(user: User): Promise<User> {
    return await this.ormRepository.save(user)
  }
}
