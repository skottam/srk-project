import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailLandingComponent } from './email-landing/email-landing.component';
import { ConsentReviewComponent } from './consent-review/consent-review.component';
import { IntroQuestionnaireComponent } from './intro-questionnaire/intro-questionnaire.component';
import { ConsentPurposeComponent } from './consent-purpose/consent-purpose.component';
import { ConsentQuestionsComponent } from './consent-questions/consent-questions.component';
import { ConsentRisksComponent } from './consent-risks/consent-risks.component';
import { ConsentSurveyComponent } from './consent-survey/consent-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailLandingComponent,
    ConsentReviewComponent,
    IntroQuestionnaireComponent,
    ConsentPurposeComponent,
    ConsentQuestionsComponent,
    ConsentRisksComponent,
    ConsentSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
