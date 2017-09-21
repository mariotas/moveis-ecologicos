$(function() {
	$("div.alert-success").on('click', function() {
		var newMessage = $("p.alert-warning").text();
		if (newMessage.length > 0) {
			newMessage = newMessage.trim();
			var stringStart = newMessage.indexOf(" : ");
			var stringStop = newMessage.indexOf("]", stringStart);
			if (stringStart > 0 && stringStop > 0) {
				$("div.alert-success").html(newMessage.substring(stringStart + 2, stringStop + 1));
			}
		}
	});
});

var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 1000);

