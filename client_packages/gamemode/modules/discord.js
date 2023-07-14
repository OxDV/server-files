// Регистрируем событие на стороне клиента для обновления статуса Discord
mp.events.add("setDiscordStatus", (serverName, status) => {
  mp.discord.update(serverName, status);
});
