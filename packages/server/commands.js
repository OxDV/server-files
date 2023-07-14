mp.events.addCommand("hp", (player) => {
  player.health = 100;
});

mp.events.addCommand("armor", (player) => {
  player.armour = 100;
  console.log("Значение player:", player.__pendingRpc);
  console.log("Значение player armour:", player.armour);
});

mp.events.addCommand("kill", (player) => {
  player.health = 0;
});

// Определение команды для вывода текущих координат
mp.events.addCommand("coords", (player) => {
  // Получение текущих координат игрока
  const position = player.position;

  // Округление координат с тремя знаками после запятой
  const formattedCoords = {
    x: position.x.toFixed(3),
    y: position.y.toFixed(3),
    z: position.z.toFixed(3),
  };

  // Вывод координат в формате JSON
  console.log(JSON.stringify(formattedCoords));
});

mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
  let weaponHash = mp.joaat(weapon);
  player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
});
