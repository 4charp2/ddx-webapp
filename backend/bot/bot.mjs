import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
import { logger } from '../options/logger.mjs';

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

console.log("Бот запущен");

export { bot, logger };
