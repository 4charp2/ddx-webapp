import {bot,logger} from '../bot.mjs';
import {start_message} from './start/start.mjs'

bot.onText(/\/start/, async(msg) => {
    logger.info('Команда /start',msg.chat.id);
    await start_message(msg.chat.id);
  });
  