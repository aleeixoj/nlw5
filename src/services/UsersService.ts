import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'

class UsersService {
  private userRepository: Repository<User>
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }
  async create(email: string) {
    //verificar se usuario existe
    const userExists = await this.userRepository.findOne({ email })
    //se existir, retornar usuario
    if (userExists) {
      return userExists
    }
    //se não exisitr salvar no db
    const user = this.userRepository.create({ email })
    await this.userRepository.save(user)
    return user
  }
}
export { UsersService }
