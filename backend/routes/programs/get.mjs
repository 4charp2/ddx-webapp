import express from 'express';
import { Programs } from '../../DB/models/programs.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/programs/get:
 *   get:
 *     summary: Получение программ по id или tag_category или всех программ
 *     tags:
 *       - programs
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID программы
 *       - in: query
 *         name: tag_category
 *         schema:
 *           type: string
 *         description: Тег категории
 *     responses:
 *       '200':
 *         description: Программа найдена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 program:
 *                   type: object
 *       '404':
 *         description: Программа не найдена
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
    const { id, tag_category } = req.query;

    try {
        let programs;

        if (id) {
            const program = await Programs.findByPk(id);
            if (program) {
                console.log(`✅ Программа найдена по ID ${id}: ${JSON.stringify(program)}`);
                return res.status(200).json({ message: 'Программа найдена', program });
            } else {
                console.log(`❌ Программа не найдена для ID: ${id}`);
                return res.status(404).json({ message: 'Программа не найдена' });
            }
        } else if (tag_category) {
            programs = await Programs.findAll({ where: { tag_category } });
            if (programs.length > 0) {
                console.log(`✅ Программы найдены по тегу ${tag_category}: ${JSON.stringify(programs)}`);
                return res.status(200).json({ message: 'Программы найдены', programs });
            } else {
                console.log(`❌ Программы не найдены для тега: ${tag_category}`);
                return res.status(404).json({ message: 'Программы не найдены' });
            }
        } else {
            programs = await Programs.findAll();
            if (programs.length > 0) {
                console.log(`✅ Все программы: ${JSON.stringify(programs)}`);
                return res.status(200).json({ message: 'Все программы', programs });
            } else {
                console.log(`❌ Нет доступных программ`);
                return res.status(404).json({ message: 'Программы не найдены' });
            }
        }
    } catch (error) {
        console.error('❌ Ошибка получения программ:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;
