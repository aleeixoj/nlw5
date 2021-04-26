import { Router } from 'express'
import { MessagesController } from './Controllers/MessagesController'
import { SettingsController } from './Controllers/SettingsController'
import { UsersController } from './Controllers/UsersController'
const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

const routes = Router()
routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

export { routes }
