import winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      // Вывод в файл всех логов
      new winston.transports.File({ filename: '../logger/app.log' }),
      // Вывод в консоль ошибок
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        ),
        level: 'error',
      })
    ]
});
