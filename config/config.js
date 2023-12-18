module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
  },
  test: {
    dialect: 'sqlite',
    storage: 'database-test.sqlite',
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
  }
};
