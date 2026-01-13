const TVK10 = {
  live {
    title Прямой эфир ТВК 10,
    isOnline true,
    streamUrl httpsplayer.twitch.tvchannel=tvk10&parent=localhost
  },

  archive [
    {
      title Тестовый эфир,
      date 10 января 2026,
      videoUrl httpswww.youtube.comembedVIDEO_ID
    }
  ],

  schedule [
    { time 1200, program Новости ТВК 10 },
    { time 1230, program Документальный фильм },
    { time 1400, program Музыкальный блок }
  ]
};
