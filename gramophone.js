function gramophone(bandName, album, songName) {
  let calc = (album.length * bandName.length * songName.length) / 2;

  let rotation = Math.ceil(calc / 2.5);
  console.log(`The plate was rotated ${rotation} times.`);
}

gramophone ('Black Sabbath', 'Paranoid', 'War Pigs')
