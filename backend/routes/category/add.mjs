import express from 'express';
import { Category } from '../../DB/models/category.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/category/add:
 *   post:
 *     summary: Создание категории
 *     tags:
 *       - category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               tag_category:
 *                 type: string
 *               video:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       '201':
 *         description: Категория успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '409':
 *         description: Категория уже существует
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
    const { name, tag_category, video } = req.body;

    try {
        const existingCategory = await Category.findOne({ where: { name } });

        if (existingCategory) {
            console.log(`✅ Категория "${name}" уже существует.`);
            return res.status(409).json({ message: `Категория "${name}" уже существует`, category: existingCategory });
        } else {
            const newCategory = await Category.create({ name, tag_category, video });
            console.log(`✅ Категория "${name}" успешно создана.`);
            return res.status(201).json({ message: `Категория "${name}" успешно создана`, category: newCategory });
        }
    } catch (error) {
        console.error('❌ Ошибка создания категории:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;
