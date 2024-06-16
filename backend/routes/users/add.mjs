import express from 'express';
import { User } from '../../DB/models/users.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/users/add:
 *   post:
 *     summary: Создание пользователя
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               training:
 *                 type: object
 *             required:
 *               - user_id
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '409':
 *         description: User already exists
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
router.post('/add', async (req, res) => {
    const { user_id, training } = req.body;

    try {
        const existingUser = await User.findOne({ where: { user_id } });

        if (existingUser) {
            console.log(`✅Пользователь с id ${user_id} - успешно создан`)
            return res.status(409).json({ message: 'Пользователь уже существует', user: existingUser });
        } else {
            const newUser = await User.create({ user_id, training });
            console.log(`✅Пользователь с id ${user_id} - Уже существует`)
            return res.status(201).json({ message: 'Пользователь создан', user: newUser });
        }
    } catch (error) {
        console.error('❌Ошибка метода /users/add :', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
