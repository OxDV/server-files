// Выводим сообщение в чат
mp.gui.chat.push("Hello World");

// Подключаем модуль discord.js с учетом пути к корневой папке
// require("./gamemode/modules/discord");
require("./gamemode/index");
require("./freeroam/index");
require("./trucker/index");

// // Вызываем событие "setDiscordStatus" для обновления статуса Discord
// mp.events.call("setDiscordStatus", "Прожит свой сервак", "as Dimitrooo");
