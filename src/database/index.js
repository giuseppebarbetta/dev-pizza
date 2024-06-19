import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:EPBmBcKjkQctEPASqMUKFvvQIIsCnlff@monorail.proxy.rlwy.net:52455/railway')
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:jzvhZhpqLqrEvtLHekMLfcfCcGHVAxZQ@viaduct.proxy.rlwy.net:31988',
    )
  }
}

export default new Database()
