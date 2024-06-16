import { bot, logger } from '../../bot.mjs';


export async function start_message(chatId) {
    

    try {
        await bot.sendMessage(chatId, `
<b>Полная трансформация тела с программами от DDX</b>

⚪️Составление и корректировка индивидуальных
планов тренировок
⚪️Обратная коммуникация с тренером
⚪️Наблюдение за прогрессом

⚪️Более 100 упражнений всех уровней сложности
⚪️Подробные видео-инструкции к упражнениям
⚪️Календарь тренировок с прогрессией сложности

Жми на кнопку Открыть

            `, { parse_mode: 'HTML' });

    } catch (error) {
        logger.error(`Error in startMessage module: ${error.message}`, { chatId, error });
    }
}


