// JavaScript Document
function deviceInfo(){
	$('#device table td').eq(1).text(window.device.name);
	$('#device table td').eq(3).text(device.phonegap);
	$('#device table td').eq(5).text(device.platform);
	$('#device table td').eq(7).text(device.version);
	$('#device table td').eq(9).text(device.uuid);
	}
$(document).ready(function(e) {
	deviceInfo();
    document.addEventListener("deviceready",function(){
		 deviceInfo();
		},false);
});