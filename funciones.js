const HOJA = SpreadsheetApp.openById('1GXzNAh_lA8yckJ2gHrwl6ODqTwc6k-wmczpLnie_rdM').getActiveSheet();

function doGet() 
{
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda AppScript');
}

function doPost(datos) 
{
  insertarContacto(datos.parameter.nombre, datos.parameter.correo);
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda AppScript');
}

function obtenerDatosHtml(nombre) 
{
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() 
{
  return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo) 
{
  HOJA.appendRow([nombre, correo]);
}
