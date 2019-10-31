import { Component, OnInit } from '@angular/core';
import * as Survey from "survey-angular";

var surveyJSON = { surveyId: '72e9afdd-3211-4066-8610-5260a0a740e8'}

  function sendDataToServer(survey) {
      survey.sendResult('583667bc-6a2c-4cfd-88d0-ce514c405ea2');
  }

@Component({
  selector: 'app-consent-survey',
  templateUrl: './consent-survey.component.html',
  styleUrls: ['./consent-survey.component.css']
})
export class ConsentSurveyComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
    var survey = new Survey.Model(surveyJSON);
        survey.onComplete.add(sendDataToServer);
        Survey.SurveyNG.render("surveyElement", { model: survey });
  }

}
