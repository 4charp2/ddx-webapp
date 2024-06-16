import express from 'express';
import { Programs } from '../../DB/models/programs.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/programs/add:
 *   post:
 *     summary: Создание программы
 *     tags:
 *       - programs
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
 *               tag_category:
 *                 type: string
 *               description:
 *                 type: string
 *               dificult:
 *                 type: string
 *               weeks:
 *                 type: object
 *             required:
 *               - name
 *     responses:
 *       '201':
 *         description: Программа успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '409':
 *         description: Программа уже существует
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
    const { name, tag_program, tag_category, description, dificult, weeks } = req.body;

    try {
        const existingProgram = await Programs.findOne({ where: { tag_program } });

        if (existingProgram) {
            console.log(`✅ Программа "${name}" уже существует.`);
            return res.status(409).json({ message: `Программа "${name}" уже существует`, program: existingProgram });
        } else {
            const newProgram = await Programs.create({ name, tag_program, tag_category, description, dificult, weeks });
            console.log(`✅ Программа "${name}" успешно создана.`);
            return res.status(201).json({ message: `Программа "${name}" успешно создана`, program: newProgram });
        }
    } catch (error) {
        console.error('❌ Ошибка создания программы:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;
