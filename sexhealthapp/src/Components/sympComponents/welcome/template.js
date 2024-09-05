/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Welcome to the Symptom Checker</h5>
      <div class="card-text">
        <p>
          This simple symptom checker mimics a doctor's interview, but it's not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p>
          If you believe you have a serious illness or medical emergency, please visit a doctor or call 911.
        </p>
        <p>
          Please click 
          <span class="badge badge-primary">Next</span> 
          to move to the first question.
        </p>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i> 
          Remember to use clear, precise language and provide accurate information for best results.
        </p>
      </div>
    `);
  });
};
export default template;
