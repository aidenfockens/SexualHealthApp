import settings from './Components/sympComponents/settings.js';
import template from './Components/sympComponents/templates/base.js';
import App from './Components/sympComponents/base/app.js';
import DemoController from './Components/sympComponents/controller.js';
import InfermedicaApi from './Components/sympComponents/infermedica-api.js';
import Patient from './Components/sympComponents/patient.js';


require('./Styles/Global.css');

export default class SymptomChecker extends App {
  constructor (el) {
    super(el, template);

    this.api = new InfermedicaApi(settings['app-id'], settings['app-key']);

    this.patient = new Patient();

    this.currentStep = 0;

    this.views = [
      {
        context: {
          api: this.api
        },
        view: 'welcome'
      },
      {
        context: {
          patient: this.patient
        },
        view: 'basic'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'nlp'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'common-risks'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'suggest'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'geo-risks'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'question'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'summary'
      }
    ];
  }
  
  nextStep () {
    this.currentStep += 1;
    this.currentStep %= 8;

    const currentView = this.views[this.currentStep];

    this.controller.destroyView();
    this.controller.setView(currentView.view, currentView.context);
  }

  afterRender () {
    this.nextButton = this.el.querySelector('#next-step');
    this.nextButton.addEventListener('click', (e) => this.nextStep(e));
  }

  startInterview () {
    this.controller = new DemoController(this.el.querySelector('#step-container'));

    const currentView = this.views[this.currentStep];
    this.controller.setView(currentView.view, currentView.context);
  }

 
}
