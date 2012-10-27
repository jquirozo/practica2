// JavaScript Document
function deviceInfo(){
	$('#devic table td').eq(1).text(device.name);
	$('#devic table td').eq(3).text(device.phonegap);
	$('#devic table td').eq(5).text(device.platform);
	$('#devic table td').eq(7).text(device.version);
	$('#devic table td').eq(9).text(device.uuid);
	}
$(document).ready(function(e) {
	deviceInfo();
    document.addEventListener("deviceready",function(){
		 deviceInfo();
		},false);
});