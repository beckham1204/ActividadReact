import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
      <table class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Correo</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">justin</th>
      <td>beckham</td>
      <td>justinbeckhamc@gmail.com</td>
      <td>3017623309</td>
    </tr>
    <tr>
      <th scope="row">michael</th>
      <td>lawrence</td>
      <td>michaellawrence12@gmail.com</td>
      <td>3234735463</td>
    </tr>
    <tr>
      <th scope="row">kevin</th>
      <td>acevedo</td>
      <td>kevinduque34@gmail.com</td>
      <td>3456237635</td>
    </tr>
  </tbody>
</table>
<h1>¿Qué es Babel y WebPack y para que se usa en REACT?</h1>
<p>es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de node.js entienda. Babel funciona mediante plugin para que le indiquemos que cosas queremos que transforme; Webpack es un paquete de módulos JavaScript de código abierto. Está hecho principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los cargadores correspondientes y funciona Para hacerte una idea, te permite meter todos tus archivos JavaScript en un único archivo.</p>
      </header>

    </div>
  );
}

export default App;
