/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html, { riskHtmlMapper } from '../templates/helpers.js';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
        <h5 class="card-title">Please check all that apply to you.</h5>
        <div class="card-text">
          <form>
            ${riskHtmlMapper(risks, context.commonRiskFactors)}
          </form>
          <p class="text-muted small">
            <i class="fa fa-info-circle"></i> Above you see the most common risk factors. This helps to steer the interview in the right direction 
            and to reduce its length.
          </p>
        </div>
      `;
  });
};

export default template;
