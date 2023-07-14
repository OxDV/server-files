const markerPos = { x: -263.631, y: 2195.67, z: 128.479 };
mp.events.add("playerReady", (player) => {
  player.call("playerInitLogistWork", [markerPos]);
});
