import express from 'express';
import { Traning } from '../../DB/models/traning.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/training/add:
 *   post:
 *     summary: Создание тренировки
 *     tags:
 *       - traning
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               tag_program:
 *                 type: string
 *               tag_training:
 *                 type: string
 *               description:
 *                 type: string
 *               dificult:
 *                 type: integer
 *             required:
 *               - name
 *     responses:
 *       '201':
 *         description: Тренировка успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 training:
 *                   type: object
 *       '409':
 *         description: Тренировка уже существует
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
router.post('/add', async (req, res) => {
    const { name, tag_program, tag_training, description, dificult } = req.body;

    try {
        const existingTraining = await Traning.findOne({ where: { name } });

        if (existingTraining) {
            console.log(`✅ Тренировка "${name}" уже существует.`);
            return res.status(409).json({ message: `Тренировка "${name}" уже существует`, training: existingTraining });
        } else {
            const newTraining = await Traning.create({ name, tag_program, tag_training, description, dificult });
            console.log(`✅ Тренировка "${name}" успешно создана.`);
            return res.status(201).json({ message: `Тренировка "${name}" успешно создана`, training: newTraining });
        }
    } catch (error) {
        console.error('❌ Ошибка создания тренировки:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;
