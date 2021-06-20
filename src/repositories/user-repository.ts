import { getRepository, Repository } from 'typeorm'
import User from '../database/entities/user'
import CreateUserDTO from '../models/user/use-cases/create-user'
import IShowUser from '../models/user/use-cases/show-user'
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

  public async findById(id: string): Promise<IShowUser | undefined> {
    const user = await this.ormRepository.findOne({ where: { id } })
    return user
  }

  public async findByEmail(email: string): Promise<IShowUser | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } })
    return user
  }

  public async findByCpf(cpf: string): Promise<IShowUser | undefined> {
    const user = await this.ormRepository.findOne({ where: { cpf } })
    return user
  }

  public async create(userData: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData)
    await this.ormRepository.save(user)
    return user
  }
}
