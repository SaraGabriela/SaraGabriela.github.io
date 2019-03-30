var imgRoleModelData = ['TAWAKKUL KARMAN','STEPHANIE KWOLEK','SILVIA TORRES CASTILLEJA','RUTH HANDLER','SOFÍA MULANOVICH','MARÍA ELENA MOYANO','LUCHA REYES','INÉS MELCHOR','HEDY LAMAR','ELENA CAFFARENA'];
var descriptionRoleModelData = ['Es una periodista, política y activista yemení, Premio Nobel de la Paz 2011 «por su batalla no violenta a favor de la seguridad de las mujeres y de su pleno derecho en la plena participación de la obra de construcción de la paz».',
'Fue una química polaco-estadounidense, inventora del Kevlar, una fibra de alta resistencia, que en la actualidad es utilizada en la elaboración de chalecos antibalas',
'Es la primera mujer mexicana doctora en Astronomía, grado que obtuvo por la Universidad de Berkeley. Entre otros cargos, en 2009 fue la coordinadora del Año de la Astronomía en México; y dos años más tarde la ONU le otorgó el galardón L’Oreal Unesco, en el rubro de “Mujeres en la Ciencia”.',
'Fue presidenta de la empresa de juguetes Mattel, Inc., y es recordada, principalmente, por su papel en la creación y el marketing de la muñeca Barbie.',



                           ];
var selector=0;                           
var path = "image/";
var imgFormat = '.png';
function render(){    
    var imgRoleModel = [document.getElementById('role-model-behind'), document.getElementById('role-model-selected'),document.getElementById('role-model-fordward')];
    var src1 = path+imgRoleModelData[selector]+imgFormat;
    var src2 = path+imgRoleModelData[selector+1]+imgFormat;
    var src3 = path+imgRoleModelData[selector+2]+imgFormat; 
    imgRoleModel[0].src = src1;
    imgRoleModel[1].src = src2;
    imgRoleModel[2].src = src3;      
    var descriptionRoleModelP = document.getElementById('role-model-description');
    descriptionRoleModelP.innerHTML=descriptionRoleModelData[selector];
    selector++;
    if(selector>3){
        selector=0;
    }
}

/*function next(){
    console.log('echo next');
    var progresBarValue = document.getElementById('progres-bar-value');
    progresBarValue.style.width = progresBarValue.offsetWidth + 55+'px';
}*/