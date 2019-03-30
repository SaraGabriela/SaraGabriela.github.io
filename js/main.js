var imgRoleModelData = ['INÉS MELCHOR','HEDY LAMAR','ELENA CAFFARENA','MARÍA ELENA MOYANO','LUCHA REYES'];
var descriptionRoleModelData = ['El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.',
                            '111111111111111111111111 traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.',
                            '222222222222222 El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.'
                           ];
var selector=0;                           
var path = "image/";
var imgFormat = '.png';
function render(){    
    var imgRoleModel = document.getElementsByClassName('role-model');
    imgRoleModel[0].src = path+imgRoleModelData[selector]+imgFormat;
    imgRoleModel[1].src = path+imgRoleModelData[selector+1]+imgFormat;
    imgRoleModel[2].src = path+imgRoleModelData[selector+2]+imgFormat;   
    console.log(path+imgRoleModelData[selector]);     
    var descriptionRoleModelP = document.getElementById('role-model-description');
    descriptionRoleModelP.innerHTML=descriptionRoleModelData[selector];
    selector++;
}