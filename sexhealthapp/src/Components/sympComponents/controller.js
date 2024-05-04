/**
 * Created by Tomasz Gabrysiak @ Infermedica on 14/02/2017.
 */
import Controller from './base/controller';
import WelcomeView from './welcome/view';
import BasicView from './basic/view';
import SuggestView from './suggest/view';
import NLPView from './nlp/view';
import GeoRisksView from './geo-risks/view';
import CommonRisksView from './common-risks/view';
import QuestionView from './question/view';
import SummaryView from './summary/view';

export default class DemoController extends Controller {
  constructor(el) {
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
