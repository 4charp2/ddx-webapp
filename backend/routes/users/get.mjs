import express from 'express';
import { User } from '../../DB/models/users.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/users/get:
 *   get:
 *     summary: Получение пользователя по user_id
 *     tags:
 *       - users
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 */


router.get('/get', async (req, res) => {
    const { user_id } = req.query;

    try {
        const existingUser = await User.findOne({ where: { user_id } });

        if (existingUser) {
            console.log(`✅ Пользователь найден user_id:${user_id}`);
            return res.status(200).json({ message: true, user: existingUser });
        } else {
            console.log(`❌Пользователь не найден user_id ${user_id}`);
            return res.status(404).json({ message: false });
        }
    } catch (error) {
        console.error('❌ Ошибка получения пользователя:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
