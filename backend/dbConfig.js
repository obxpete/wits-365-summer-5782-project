
const config = {
  
    driver: 'msnodesqlv8',
    server: 'witssummer.c5ni8ntdysh1.us-east-1.rds.amazonaws.com',
    userName: 'admin',
    password: 'wits365summer5782',
    database: 'witsExamples',
    options: {
      trustedConnection: true,
      enableArithPort: true
    },
    port: 1433
  
}

module.exports = config;