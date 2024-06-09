import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Получить приветственное сообщение
 *     tags: [def]
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 'Hello, World!'
 */
router.get('/api', (req, res) => {
    res.send('Hello, Hacker!');
});



export default router;
