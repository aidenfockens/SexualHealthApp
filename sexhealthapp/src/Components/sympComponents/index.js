/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

import SymptomChecker from '.../SymptomChecker';

const app = new SymptomChecker(document.getElementById('app'));

window.addEventListener('load', () => {
  app.render();
  app.startInterview();
});
