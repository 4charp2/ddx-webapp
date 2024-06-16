import { sequelize } from './initsequlize.mjs';
import { User } from './models/users.mjs';
import { Category } from './models/category.mjs';
import { Traning } from './models/traning.mjs';
import { Programs } from './models/programs.mjs'



(async () => {
    try {
        await sequelize.sync(); 
        console.log("✅Сихронизация успешна");
    } catch (error) {
        console.error("❌ sinc error: ", error);
    }
})();