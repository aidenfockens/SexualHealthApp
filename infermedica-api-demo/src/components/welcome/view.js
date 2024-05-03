/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view.js';
import template from './template.js';

export default class WelcomeView extends View {
  constructor (el, context) {
    super(el, template, context, null);

    this.context.api.generateInterviewId();
  }
}
