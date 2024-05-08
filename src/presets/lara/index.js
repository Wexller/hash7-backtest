import global from 'src/presets/lara/global.js';
import button from 'src/presets/lara/components/button';
import selectbutton from 'src/presets/lara/components/selectbutton';
import accordion from 'src/presets/lara/components/accordion/index.js';
import treetable from 'src/presets/lara/components/treetable/index.js';
import card from 'src/presets/lara/components/card/index.js';
import dialog from 'src/presets/lara/components/dialog/index.js';
import inputtext from 'src/presets/lara/components/inputtext/index.js';
import inputnumber from 'src/presets/lara/components/inputnumber/index.js';
import floatlabel from 'src/presets/lara/components/floatlabel/index.js';
import inputgroup from 'src/presets/lara/components/inputgroup/index.js';

export default {
  global,

  //forms
  inputgroup,
  inputtext,
  inputnumber,
  floatlabel,

  //buttons
  button,
  selectbutton,

  //data
  treetable,

  //panels
  accordion,
  card,

  //overlays
  dialog,
}
