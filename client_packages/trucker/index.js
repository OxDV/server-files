let colshape;
let colshapeMarker;
let trackMarker;
let trackColshape;
let showWork;
let playerLocal = mp.players.local;
let workStatus = 0;
let muleSpawn = { x: -267.857, y: 2193.226, z: 130.038, heading: -118.648 };
let trackSpawn = { x: -230.886, y: 2081.921, z: 138.778 };
let redColor = [255, 0, 0, 100];
mp.gui.chat.push("Привет, мир!");

const playerInitWork = (marker) => {
  colshapeSphere = mp.colshapes.newSphere(marker.x, marker.y, marker.z + 1, 2);
  colshapeMarker = mp.markers.new(marker.x + 1, marker.y, marker.z + 1, {
    color: redColor,
  });
  mp.peds.new(
    mp.game.joaat("a_c_cow"),
    [marker.x, marker.y, marker.z + 2, 1],
    260.0,
    playerLocal.dimension
  );
};

const workNotify = (msgText) => {
  mp.game.ui.setNotificationTextEntry("STRING");
  mp.game.ui.setNotificationMessage(
    "CHAR_RON",
    "CHAR_RON",
    false,
    2,
    "Новое сообщение",
    msgText
  );
};

const startColshape = () => {
  showWork = mp.browsers.new("package://trucker/cef/index.html");
  showWork.execute("mp.invoke('focus', true)");
  mp.gui.chat.activate(false);
  mp.game.graphics.startScreenEffect("ChopVision", 0, true);
};

const beginWork = () => {
  showWork.execute("mp.invoke('focus', false)");
  showWork.activate = false;
  mp.game.graphics.stopScreenEffect("ChopVision");
  mp.gui.chat.activate(true);
};

const spawnVehiclesForWork = (carName, carSpawn) => {
  mp.vehicles.new(mp.game.joaat(carName), carSpawn, {
    heading: carSpawn.heading,
  });
};

const setCheckPoint = () => {
  trackColshape = mp.colshapes.newSphere(
    trackSpawn.x,
    trackSpawn.y,
    trackSpawn.z,
    3
  );
  trackMarker = mp.markers.new(
    1,
    [trackSpawn.x, trackSpawn.y, trackSpawn.z - 2],
    3,
    { color: redColor, visible: true }
  );
  trackBlip = mp.blips.new(431, [trackSpawn.x, trackSpawn.y, trackSpawn.z], {
    shortRange: false,
  });
  trackBlip.setRoute(true);
};

const vehicleCheck = () => {
  if (!playerLocal.vehicle) {
    workNotify("Вы не можете доставить груз без машины!");
    return false;
  }
  return true;
};

const clearTrack = () => {
  trackColshape.destroy();
  trackMarker.destroy();
  trackBlip.destroy();
};

const startTrackShape = () => {
  if (!vehicleCheck()) return mp.gui.chat.push("Вы должны быть в транспорте.");
  clearTrack();
  workStatus = 0;
};
