import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  cpf: string

  @Column()
  serasaScore: number

  @Column('decimal', { precision: 2, scale: 2 })
  averageMonthlyIncome: number

  @Column('decimal', { precision: 2, scale: 2 })
  averageMonthlyExpense: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User
