/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../templates/helpers.js';

const template = (context) => {
  return new Promise((resolve) => {
    resolve(html`
      <h5 class="card-title">Tell us how you feel.</h5>
      <div class="card-text">
        <form>
          <div class="form-group">
            <textarea placeholder="e.g. I have a headache" class="form-control" id="input-feel" rows="4"></textarea>
            <br /><br />
            <label for="input-feel">
              We will try to recognize your symptoms using a Natural Language Processing algorithm powered by Infermedica's API.
            </label>
          </div>
        </form>
        <p>Identified observations:</p>
        <ul class="list-unstyled" id="observations">
        </ul>
        <p class="text-muted small">
          <i class="fa fa-exclamation-circle"></i>
          Please note that you can go <span class="badge badge-primary">Next</span> only if there are 
          <span class="text-success">present <i class="fa fa-plus-circle"></i></span>
          identified observations.
        </p>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i> 
          All of the identified symptoms will be added to your interview after clicking
          <span class="badge badge-primary">Next</span>.
        </p>
      </div>
    `);
  });
};

export default template;