'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 150;
var CLOUD_Y = 15;
var GAP = 10;

var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var titleGap = CLOUD_Y + TEXT_HEIGHT * 2 + GAP * 2;
var BAR_WIDTH = 40;

var barHeight = CLOUD_HEIGHT - titleGap - TEXT_HEIGHT * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomInt = function (int) {
  var randomInt = Math.floor (Math.random () * int) + 1;
  return randomInt;
};

var paintingGap = function (arr, ctx, i) {
  if (arr[i] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(255, ' + getRandomInt (100) + '%' + ', 50%)';
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_GAP * 2 * i), CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor (times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP * 2 * i), CLOUD_HEIGHT - (barHeight * times[i]) / maxTime - TEXT_HEIGHT * 2);
    paintingGap (players, ctx, i);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP * 2 * i), CLOUD_HEIGHT - (barHeight * times[i]) / maxTime - TEXT_HEIGHT, BAR_WIDTH, (barHeight * times[i]) / maxTime);

  }

};

