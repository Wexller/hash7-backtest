import global from 'src/presets/lara/global.js';
import button from 'src/presets/lara/components/button';
import selectbutton from 'src/presets/lara/components/selectbutton';
import card from 'src/presets/lara/components/card/index.js';
import dialog from 'src/presets/lara/components/dialog/index.js';
import inputtext from 'src/presets/lara/components/inputtext/index.js';
import inputnumber from 'src/presets/lara/components/inputnumber/index.js';
import floatlabel from 'src/presets/lara/components/floatlabel/index.js';
import inputgroup from 'src/presets/lara/components/inputgroup/index.js';
import calendar from 'src/presets/lara/components/calendar/index.js';
import dropdown from 'src/presets/lara/components/dropdown/index.js';
import multiselect from 'src/presets/lara/components/multiselect/index.js';
import inlinemessage from 'src/presets/lara/components/inlinemessage/index.js';
import progressbar from 'src/presets/lara/components/progressbar/index.js';
import datatable from 'src/presets/lara/components/datatable/index.js';
import toast from 'src/presets/lara/components/toast/index.js';
import message from 'src/presets/lara/components/message/index.js';
import fieldset from 'src/presets/lara/components/fieldset/index.js';
import dataview from 'src/presets/lara/components/dataview/index.js';
import panel from 'src/presets/lara/components/panel/index.js';

export default {
  global,

  //forms
  calendar,
  dropdown,
  inputgroup,
  inputtext,
  inputnumber,
  floatlabel,
  multiselect,

  //buttons
  button,
  selectbutton,

  //data
  datatable,
  dataview,

  //panels
  card,
  fieldset,
  panel,

  //overlays
  dialog,

  //messages
  inlinemessage,
  message,
  toast,

  //misc
  progressbar
}
