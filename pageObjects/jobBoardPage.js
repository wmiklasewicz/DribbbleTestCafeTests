import { validUser } from '../../data/user';
import loginPage from '../../../pageObjects/loginPage';
import basePage from '../../pageObjects/basePage';

import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const jobBoardPage = {
  url:            'jobs/',
  keywordInput:  $('#keyword'),
  locationInput:  $('#location'),
  loginButton:    $('//*[@id="main-container"]/section[2]/main/div/div[2]/form/input[4]'),
}
export default {...basePage, ...loginPage}