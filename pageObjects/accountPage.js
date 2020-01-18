import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const accountPage = {
  url:                      'account/profile/',
  userProfile:              $('#t-profile > a:nth-child(1)'),
  editUserProfile:          $('#account-profile'),
  nameInput:                $('#profile_name'),
  locationInput:            $('#profile_location'),
  bioInput:                 $('#profile_bio'),
  uploadNowButton:          $('#add-btn > input:nth-child(1)'),
  skillsInput:              $('.selectize-input'),  
  roleInput:                $('#profile_work_experiences_attributes_0_title'),
  companyInput:             $('#profile_work_experiences_attributes_0_company'),   
  monthDropBox:             $('#profile_work_experiences_attributes_0_start_date_2i'),
  fromYearDropBox:          $('#profile_work_experiences_attributes_0_start_date_1i'),
  toYearDropBox:            $('#profile_work_experiences_attributes_0_end_date_2i'),
  saveProfileButton:        $('.mr10-ns'),
  successMsg:               $('div.notice:nth-child(3)'),
  ilustrationSpecialities:  $('.draggable-container-inactive > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)'),
  selectYearsWidget:        $('.specialty-active > div:nth-child(2) > div:nth-child(1)'),
  experience3years:         $('.dropped > div:nth-child(3) > label:nth-child(2)'),
  leadershipSpecialities:   $('div.widget-block:nth-child(3)'),
  experience1year:          $('.dropped > div:nth-child(2) > label:nth-child(2)'),
  animationSpecialities:    $('div.widget-block:nth-child(6) > div:nth-child(1) > label:nth-child(2)'),
  experience6years:         $('.dropped > div:nth-child(4) > label:nth-child(2)'),
  addAnotherJobButton:      $('a.form-btn:nth-child(4)'),
  editJobHistoryTitle:      $('#profile_work_experiences_attributes_0_title'),
  editJobHistoryComapny:    $('#profile_work_experiences_attributes_0_company'),


  async clearInput(input) {
    await t
      .selectText(input)
      .pressKey('delete');
  },

  async uncheckExperience(){
    await t
      .click(accountPage.ilustrationSpecialities);
  }

}
export default {...basePage, ...accountPage}




