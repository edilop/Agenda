function doGet() {
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda AppScript');
}


function obtenerDatosHtml(nombre){
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
  let hoja = SpreadsheetApp.openById('1GXzNAh_lA8yckJ2gHrwl6ODqTwc6k-wmczpLnie_rdM/').getActiveSheet();
  let datos = hoja.getDataRange().getValues();
  return datos;
}