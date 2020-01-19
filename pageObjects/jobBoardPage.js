import { Selector as $, t } from 'testcafe';
import basePage from './basePage';
import { ClientFunction } from 'testcafe';


const jobBoardPage = {
  url:                          'jobs/',
  keywordInput:                 $('#keyword'),
  locationInput:                $('#location'),
  editPage:                     $('.edit-profile > a:nth-child(1)'),
  header:                       $('#wrap > section > div.dd-hero-small-text > h1'),
  postJob:                      $('#wrap > section > div.dd-hero-small-cta > div > a'),
  getPageUrl:                   ClientFunction(() => window.location.href),
  skills:                       $('#skills'),
  skillsProductDesigner:        $('#skills > option:nth-child(1)'),
  fullTimeButton:               $('#options > fieldset:nth-child(6) > label > div'),
  searchButton:                 $('#options > div > input'),
  keywordText:                  "Product",
  locationText:                 "San Francisco",
  container:                    $('option').withAttribute('value', 'Product Designer'),
  remoteFriendlyButton:         $('#options > fieldset:nth-child(5) > label > div'),
  freelanceContractButton:      $('#options > fieldset:nth-child(7) > label > div'),
  firstOffer:                   $('#job-board-groups > ol:nth-child(1) > li:nth-child(1) > a > div.flex.mb20 > div > div.job-board-job-title.text-size-16.text-size-24-ns.lh-title.text-weight-700'),
  firstOfferHeader:             $('#header > h1'),
  learnMoreButton:              $('#content > div.job-board-container.m0auto.mt60-ns.flex-ns > div.job-board-talent > div > a.talent-btn.form-btn'),
  getHiredButton:               $('#wrap > nav > ul > li.nav-item.nav-item--current > a'),
  getProBusinessButton:         $('#content > div.job-board-container.m0auto.mt60-ns.flex-ns > div.job-board-filters > div.d-none.d-block-ns > a'),
  readyForProButton:            $('#subnav-page-content > main > header > div.pro-header-txt > a'),

  
  async typeKeyword(keywordText)
  {
      await t.typeText(this.keywordInput, keywordText);
  },

  async typelocation(locationText)
  {
    await t.typeText(this.locationInput, locationText);
  },

  async selectSpecialty(container)
  { 
    await t.click(this.skills);
    await t.click(this.container);
  },

  async selectFullTimeButton()
  {
    await t.click(this.fullTimeButton);
  },

  async selectRemoteFriendly()
  {
    await t.click(this.remoteFriendlyButton);
  },
  async selectFreelanceRemoteButton()
  {
    await t.click(this.freelanceContractButton);
  },

  async clickSearch()
  {
    await t.click(this.searchButton);
  },

  async getInnerTextOfFirstElement()
  {
    return this.firstOffer.innerText;
  },

  async getInnerTextOfFullOfferDescription()
  {
    return this.firstOfferFullDescription.innerText;
  }
}

export default {...basePage, ...jobBoardPage}