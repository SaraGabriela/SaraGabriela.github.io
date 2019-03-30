var imgRoleModelData = ['SOFÍA MULANOVICH','MARÍA ELENA MOYANO','LUCHA REYES','INÉS MELCHOR','HEDY LAMAR','ELENA CAFFARENA'];
var descriptionRoleModelData = ['El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.',
                            '111111111111111111111111 traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.',
                            '222222222222222 El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.'
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