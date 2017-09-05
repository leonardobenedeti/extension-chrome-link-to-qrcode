function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderImg(url){
  var imgUrl = "https://chart.googleapis.com/chart?cht=qr&chl="+ url + "&chs=160x160&chld=L|0";
  var imageResult = document.getElementById('image-result');
  imageResult.width = 150;
  imageResult.height = 150;
  imageResult.src = imgUrl;
  // renderStatus('URL QR ' + imgUrl);
  imageResult.hidden = false;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // console.log("TESTE");
    renderImg(url);

  });
});