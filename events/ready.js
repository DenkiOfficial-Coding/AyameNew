module.exports = (client) => {
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );

  const activities = [`Đang chơi trốn tìm tại ${client.guilds.cache.size} server`,"Prefix: /help | www.ayamebot.tk",`Đang chơi cá ngựa cùng bạn nữ 2k9 hàng xóm`,`Đang xem gái 2k4 cosplay Hutao`,`Đang ngắm gái trên Gentle (Facebook)`,`Đang xem hentaiz.cc`,`Đang mua bao cao su`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "PLAYING" });
  }, 20000);

};
