//alertas del dispositivo

/*function pgAlert(mess){
	var title=$('title').text();
	var btnName='Aceptar';
	function error(){
		alert(mess);
	}
	navigator.notification.alert(mess, error, title, btnName);
}
//Datos del dispositivo
function deviceData(){
	$('#devic table td').eq(1).text(device.name);
	$('#devic table td').eq(3).text(device.phonegap);
	$('#devic table td').eq(5).text(device.platform);
	$('#devic table td').eq(7).text(device.version);
	$('#devic table td').eq(9).text(device.uuid);
}
//Historial de Eventos
function eventHistory(action){
	$('#eventsHistory').append('<li>'+action+'</li>');
}
//Contactos en el dispositivo
function readContacts(){
	var contactosList='';
	navigator.contacts.find(["name", "phoneNumbers"], function(contactos){
		for(i=0;i<contactos.length;i++){
			var contacto = contactos[i];
			contactosList+='<li><a href="tel://'+contacto.name.formatted+'">'+contacto.phoneNumbers[0].value+'</a></li>';
		}
	}, function(){
		pgAlert('No se han podido leer los contactos');
	}
	$('#contactsList').html(contactosList);
}
//Crear contactos
function newContact(){
	if($('#contDispley').val() != '' && $('#contName').val() != '' && $('#contFamily').val() != '' && $('#contPhone').val() != ''){
		var contacto = navigator.contacts.create();
		//Nombre para mostrar
		contacto.displayName = $('#contDispley').val();
		//Nombre del Contacto
		contacto.name = new CountactName();
		contacto.name.givenName = $('#contName').val();
		contacto.name.familyName = $('#contFamily').val();
		//Teléfono
		var tel = ($('#contPhone').val()).substring(0,3)+'-'+($('#contPhone').val()).substring(3,3)+'-'+($('#contPhone').val()).substring(6,4);
		contacto.phoneNunbers = [];
		contacto.phoneNumbers[0] = new ContactField("mobile", tel, true);//p1("home","mobile","work") - p2(cadena de texto con formato 123-456-7890) - p3(true, false)
		
		contacto.save(function(){//Guardar al contacto
			pgAlert("Grabado Correctamente");
		}, function(){
			pgAlert("No se pudo Guardar");
		});
		//Volver a leer contactos
		readContacts();
	}else{
		pgAlert("Tienes que llenar todos los campos");
	}
}
//Lectura de archivos
function readFiles(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		fileSystem.root.getFile('read-write.txt', null, function(archivo){
			archivo.file(function(archivo){
				var lector = new FileReader();
				lector.onloadend = function(e){
					$('#fileContent').val(e.target.result);
				}
			}, function(){
				pgAlert("No existe el archivo, agrega contenido y luego presiona en Escribir");
			});
		},
		function(err){
			pgAlert("No se pudo acceder al sistema de archivos");
		});
	},
	function(err){
		pgAlert("No se pudo acceder al sistema de archivos");
	});
}
//Escritura de archivos
function writeFiles(){
	var content = $('#fileContent').val();
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		fileSystem.root.getFile('read-write.txt', { create: true }, function(archivo){
			archivo.createWriter(function(escritor){
				escritor.onwrite = function(e){
					pgAlert("El archivo fue escrito Correctamente!");
				};
				escritor.write(content);
			}, function(){
				pgAlert("No existe el archivo, agrega contenido y luego presiona en Escribir");
			});
		}, function(err){
			pgAlert("No se pudo acceder al sistema de archivos");
		});
	}, function(err){
		pgAlert("No se pudo acceder al sistema de archivos");
	});
}
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		deviceData();//Datos del dispositivo
		//Eventos
			document.addEventListener("pause", function(){//Al pausar la aplicación
				eventHistory('La aplicaci&oacute;n se paus&oacute;');
			}, false);
			document.addEventListener("resume", function(){//Al volver a la aplicación
				eventHistory('La aplicaci&oacute;n se reinici&oacute;');
			}, false);
			document.addEventListener("online", function(){//Al conectarse a la red
				eventHistory('La aplicaci&oacute;n se ha conectado');
			}, false);
			document.addEventListener("offline", function(){//Al desconectarse de la red
				eventHistory('La aplicaci&oacute;n se ha desconectado');
			}, false);
		
		readContacts();//Leer Contactos
		readFiles();//Leer Archivos
		//Acciones de formularios
			$('.sendForm').click(function(){
				switch($(this).parents('ul').attr('id')){
					case 'newContact':
						newContact();
						break;
					case 'playFiles':
						writeFiles();
						break;
				}
				
			});
	}, false);
});*/
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		//Información del dispositivo
		$('#devic table td').eq(1).text(device.name);
		$('#devic table td').eq(3).text(device.cordova);
		$('#devic table td').eq(5).text(device.platform);
		$('#devic table td').eq(7).text(device.version);
		$('#devic table td').eq(9).text(device.uuid);
		//Historial Eventos
		document.addEventListener("pause", function(){//Al pausar la aplicación
			eventHistory('La aplicaci&oacute;n se paus&oacute;');
		}, false);
		document.addEventListener("resume", function(){//Al volver a la aplicación
			eventHistory('La aplicaci&oacute;n se reinici&oacute;');
		}, false);
		document.addEventListener("online", function(){//Al conectarse a la red
			eventHistory('La aplicaci&oacute;n se ha conectado');
		}, false);
		document.addEventListener("offline", function(){//Al desconectarse de la red
			eventHistory('La aplicaci&oacute;n se ha desconectado');
		}, false);
	}, false);
});
function eventHistory(action){
	$('#eventsHistory').append('<li>'+action+'</li>');
}