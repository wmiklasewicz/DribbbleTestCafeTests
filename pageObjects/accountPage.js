import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const accountPage = {
  url:                            'account/profile/',
  userProfile:                    $('#t-profile > a:nth-child(1)'),
  editUserProfile:                $('#account-profile'),
  nameInput:                      $('#profile_name'),
  locationInput:                  $('#profile_location'),
  bioInput:                       $('#profile_bio'),
  uploadNowButton:                $('#add-btn > input:nth-child(1)'),
  userAwatarButton:               $('#user_avatar'),
  deleteAwatarButton:             $('#delete-avatar-button'),
  awatarMsg:                      $('div.notice:nth-child(3) > h2:nth-child(1)'),
  skillsInput:                    $('.selectize-input'),  
  roleInput:                      $('#profile_work_experiences_attributes_0_title'),
  companyInput:                   $('#profile_work_experiences_attributes_0_company'),   
  startYearJobDropBox:            $('#profile_work_experiences_attributes_0_start_date_1i'),
  startMonthJobDropBox:           $('#profile_work_experiences_attributes_0_start_date_2i'),
  toYearJobDropBox:               $('#profile_work_experiences_attributes_0_end_date_2i'),
  monthValue:                     $('#profile_work_experiences_attributes_0_start_date_2i > option:nth-child(3)'),
  saveProfileButton:              $('.mr10-ns'),
  successMsg:                     $('div.notice:nth-child(3)'),
  dragableContainerFirst:         $('#new_profile > div:nth-child(8) > div > div.draggable-container > div:nth-child(1)'),
  dragableContainer:              $('#new_profile > div:nth-child(8) > div > div.draggable-container'),
  experiencePickConcatInactive:   ('#new_profile > div:nth-child(8) > div > div.draggable-container-inactive > div:nth-child('),
  experiencePickConcatActive:     ('#new_profile > div:nth-child(8) > div > div.draggable-container > div:nth-child('),
  experienceYearArrowConcat:      (' > div.flex.items-center > div'),
  experienceYearPickConcat:       (' > div.flex.items-center > div > div > div:nth-child(3)'),
  addAnotherJobButton:            $('a.form-btn:nth-child(4)'),
  jobHistoryTitle:                $('#profile_work_experiences_attributes_0_title'),
  jobHistoryCompany:              $('#profile_work_experiences_attributes_0_company'),
  personalWebsite:                $('#profile_url'),
  monthValue:                     $('#profile_work_experiences_attributes_0_start_date_2i > option:nth-child(2)'),
  fullTimeCheckBox:               $('div.ta-checkbox-input:nth-child(2) > label:nth-child(3)'),
  fullTimeCheckBoxVerify:         $('#new_profile > div.d-none'),    
  freelanceCheckBox:              $('div.flex:nth-child(4) > label:nth-child(3)'),
  salaryProfile:                  $('#profile_salary_range'),
  profileStarting:                $('#profile_starting_timeframe'),
  remoteOnlyOption:               $('div.mr20:nth-child(2) > label:nth-child(2)'),
  workAvailabilitySection:        $('div.mt10:nth-child(3)'),

  async clearInput(input) {
    await t
      .selectText(input)
      .pressKey('delete');
  },
}

export default {...basePage, ...accountPage}