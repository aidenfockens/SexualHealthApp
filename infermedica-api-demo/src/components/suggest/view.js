/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view.js';
import template from './template.js';

export default class SuggestView extends View {
  constructor (el, context) {
    context.data = context.patient.toSuggest();

    const handleSymptomsChange = (e) => {
      const group = {};
      this.el.querySelectorAll('.input-symptom').forEach((item) => {
        // we do not mark any symptoms that comes from suggest as absent
        if (item.checked) {
          group[item.id] = { reported: true, source: 'suggest' };
        } else {
          // completely remove this symptom
          this.context.patient.removeSymptom(item.id);
        }
      });

      this.context.patient.addSymptomsGroup(group);
    };

    const binds = {
      '.input-symptom': {
        type: 'change',
        listener: handleSymptomsChange
      }
    };

    super(el, template, context, binds);
  }
}
