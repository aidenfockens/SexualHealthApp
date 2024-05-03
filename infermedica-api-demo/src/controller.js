/**
 * Created by Tomasz Gabrysiak @ Infermedica on 14/02/2017.
 */

import Controller from './base/controller.js';

import WelcomeView from './components/welcome/view.js';
import BasicView from './components/basic/view.js';
import SuggestView from './components/suggest/view.js';
import NLPView from './components/nlp/view.js';
import GeoRisksView from './components/geo-risks/view.js';
import CommonRisksView from './components/common-risks/view.js';
import QuestionView from './components/question/view.js';
import SummaryView from './components/summary/view.js';

export default class DemoController extends Controller {
  constructor (el) {
    super(el);
    this.viewMapper = {
      welcome: WelcomeView,
      basic: BasicView,
      suggest: SuggestView,
      nlp: NLPView,
      'geo-risks': GeoRisksView,
      'common-risks': CommonRisksView,
      question: QuestionView,
      summary: SummaryView
    };
  }

  beforeSetView (name) {
    const ViewClass = this.viewMapper[name];
    if ([QuestionView, NLPView].includes(ViewClass)) {
      document.getElementById('next-step').setAttribute('disabled', 'true');
    }
  }
}
