import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailLandingComponent } from '../app/email-landing/email-landing.component';
import { ConsentReviewComponent } from '../app/consent-review/consent-review.component';
import { ConsentPurposeComponent } from '../app/consent-purpose/consent-purpose.component';
import { ConsentQuestionsComponent } from '../app/consent-questions/consent-questions.component';
import { ConsentRisksComponent } from '../app/consent-risks/consent-risks.component';
import { IntroQuestionnaireComponent } from '../app/intro-questionnaire/intro-questionnaire.component';
import { ConsentSurveyComponent } from '../app/consent-survey/consent-survey.component';



const routes: Routes = [
  { path: '', redirectTo: '/email', pathMatch: 'full' },
  { path: 'email', component: EmailLandingComponent },
  { path: 'consentReview', component: ConsentReviewComponent },
  { path: 'consentReview/purpose', component: ConsentPurposeComponent },
  { path: 'consentReview/questions', component: ConsentQuestionsComponent },
  { path: 'consentReview/risks', component: ConsentRisksComponent },
  { path: 'questionnaire/intro', component: IntroQuestionnaireComponent },
  { path: 'questionnaire/intro/survey', component: ConsentSurveyComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
