import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const accountPage = {
  url:                      'account/profile/',
  userProfile:                $('#t-profile > a:nth-child(1)'),
  editUserProfile:            $('#account-profile'),
  nameInput:                  $('#profile_name'),
  locationInput:              $('#profile_location'),
  bioInput:                   $('#profile_bio'),
  uploadNowButton:            $('#add-btn > input:nth-child(1)'),
  userAwatarButton:           $('#user_avatar'),
  deleteAwatarButton:         $('#delete-avatar-button'),
  awatarMsg:                  $('div.notice:nth-child(3) > h2:nth-child(1)'),
  skillsInput:                $('.selectize-input'),  
  roleInput:                  $('#profile_work_experiences_attributes_0_title'),
  companyInput:               $('#profile_work_experiences_attributes_0_company'),   
  startYearJobDropBox:        $('#profile_work_experiences_attributes_0_start_date_1i'),
  startMonthJobDropBox:       $('#profile_work_experiences_attributes_0_start_date_2i'),
  toYearJobDropBox:           $('#profile_work_experiences_attributes_0_end_date_2i'),
  monthValue:                 $('#profile_work_experiences_attributes_0_start_date_2i > option:nth-child(3)'),
  saveProfileButton:          $('.mr10-ns'),
  successMsg:                 $('div.notice:nth-child(3)'),
  ilustrationSpecialities:    $('.draggable-container-inactive > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)'),
  selectYearsWidget:          $('.specialty-active > div:nth-child(2) > div:nth-child(1)'),
  experience3years:           $('.dropped > div:nth-child(3) > label:nth-child(2)'),
  leadershipSpecialities:     $('div.widget-block:nth-child(3)'),
  experience1year:            $('.dropped > div:nth-child(2) > label:nth-child(2)'),
  animationSpecialities:      $('div.widget-block:nth-child(6) > div:nth-child(1) > label:nth-child(2)'),
  experience6years:           $('.dropped > div:nth-child(4) > label:nth-child(2)'),
  addAnotherJobButton:        $('a.form-btn:nth-child(4)'),
  jobHistoryTitle:            $('#profile_work_experiences_attributes_0_title'),
  jobHistoryCompany:          $('#profile_work_experiences_attributes_0_company'),
  personalWebsite:            $('#profile_url'),
  monthValue:                 $('#profile_work_experiences_attributes_0_start_date_2i > option:nth-child(2)'),
  fullTimeCheckBox:           $('div.ta-checkbox-input:nth-child(2) > label:nth-child(3)'),
  freelanceCheckBox:          $('div.flex:nth-child(4) > label:nth-child(3)'),
  salaryProfile:              $('#profile_salary_range'),
  profileStarting:            $('#profile_starting_timeframe'),
  remoteOnlyOption:           $('div.mr20:nth-child(2) > label:nth-child(2)'),
  workAvailabilitySection:    $('div.mt10:nth-child(3)'),
  errorMsg:                   $('div.notice:nth-child(3)'),


  async clearInput(input) {
    await t
      .selectText(input)
      .pressKey('delete');
  },

  async uncheckOption(option){
    await t
      .click(option);
  }

}
export default {...basePage, ...accountPage}




