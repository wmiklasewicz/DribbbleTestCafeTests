import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const jobBoardPage = {
  url:            'jobs/',
  keywordInput:  $('#keyword'),
  locationInput:  $('#location'),
  editPage:    $('.edit-profile > a:nth-child(1)'),
}
export default {...basePage, ...jobBoardPage}