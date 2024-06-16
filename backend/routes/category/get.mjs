import express from 'express';
import { Category } from '../../DB/models/category.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/category/get:
 *   get:
 *     summary: Получение категорий по id или tag_category или всех категорий
 *     tags:
 *       - category
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID категории
 *       - in: query
 *         name: tag_category
 *         schema:
 *           type: string
 *         description: Тег категории
 *     responses:
 *       '200':
 *         description: Категория найдена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '404':
 *         description: Категория не найдена
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
        let categories;

        if (id) {
            const category = await Category.findByPk(id);
            if (category) {
                console.log(`✅ Категория найдена по ID ${id}: ${JSON.stringify(category)}`);
                return res.status(200).json({ message: 'Категория найдена', category });
            } else {
                console.log(`❌ Категория не найдена для ID: ${id}`);
                return res.status(404).json({ message: 'Категория не найдена' });
            }
        } else if (tag_category) {
            categories = await Category.findOne({ where: { tag_category } });
            if (categories) {
                console.log(`✅ Категория найдена по тегу ${tag_category}: ${JSON.stringify(categories)}`);
                return res.status(200).json({ message: 'Категория найдена', categories });
            } else {
                console.log(`❌ Категория не найдена для тега: ${tag_category}`);
                return res.status(404).json({ message: 'Категория не найдена' });
            }
        } else {
            categories = await Category.findAll();
            if (categories.length > 0) {
                console.log(`✅ Все категории: ${JSON.stringify(categories)}`);
                return res.status(200).json({ message: 'Все категории', categories });
            } else {
                console.log(`❌ Нет доступных категорий`);
                return res.status(404).json({ message: 'Категории не найдены' });
            }
        }
    } catch (error) {
        console.error('❌ Ошибка получения категорий:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;