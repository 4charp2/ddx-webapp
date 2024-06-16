import express from 'express';
import { Traning } from '../../DB/models/traning.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/training/get:
 *   get:
 *     summary: Получение тренировок по id или tag_program или всех тренировок
 *     tags:
 *       - traning
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID тренировки
 *       - in: query
 *         name: tag_program
 *         schema:
 *           type: string
 *         description: Тег программы
 *     responses:
 *       '200':
 *         description: Тренировка найдена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 training:
 *                   type: object
 *       '404':
 *         description: Тренировка не найдена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Внутренняя ошибка сервера
 */

router.get('/get', async (req, res) => {
    const { id, tag_program } = req.query;

    try {
        let trainings;

        if (id) {
            const training = await Traning.findByPk(id);
            if (training) {
                console.log(`✅ Тренировка найдена по ID ${id}: ${JSON.stringify(training)}`);
                return res.status(200).json({ message: 'Тренировка найдена', training });
            } else {
                console.log(`❌ Тренировка не найдена для ID: ${id}`);
                return res.status(404).json({ message: 'Тренировка не найдена' });
            }
        } else if (tag_program) {
            trainings = await Traning.findAll({ where: { tag_program } });
            if (trainings.length > 0) {
                console.log(`✅ Тренировки найдены по тегу ${tag_program}: ${JSON.stringify(trainings)}`);
                return res.status(200).json({ message: 'Тренировки найдены', trainings });
            } else {
                console.log(`❌ Тренировки не найдены для тега: ${tag_program}`);
                return res.status(404).json({ message: 'Тренировки не найдены' });
            }
        } else {
            trainings = await Traning.findAll();
            if (trainings.length > 0) {
                console.log(`✅ Все тренировки: ${JSON.stringify(trainings)}`);
                return res.status(200).json({ message: 'Все тренировки', trainings });
            } else {
                console.log(`❌ Нет доступных тренировок`);
                return res.status(404).json({ message: 'Тренировки не найдены' });
            }
        }
    } catch (error) {
        console.error('❌ Ошибка получения тренировок:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;
