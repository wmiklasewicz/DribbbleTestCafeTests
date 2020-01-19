import jobBoardPage from '../../pageObjects/jobBoardPage'
import { Selector } from 'testcafe';


fixture('Job page')
.beforeEach(async t => {
   await jobBoardPage.goto();
});


test('should contain header', async t => {
      await t.maximizeWindow();
      await t.expect(jobBoardPage.header.innerText).contains("Design Jobs");
 });

 test('should contain post a job link', async t => {
    await t.expect(jobBoardPage.postJob.innerText).contains("Post a Job");
    await t.expect(jobBoardPage.postJob.getAttribute("href")).contains("/jobs/new");
    await t.click(jobBoardPage.postJob);
    await t.expect(jobBoardPage.getPageUrl()).contains('https://dribbble.com/jobs/new');
 });

 test('search for full time product designer', async t =>
 {
    const  checkFirstOffer = await jobBoardPage.getInnerTextOfFirstElement();
    await jobBoardPage.typeKeyword(jobBoardPage.keywordText);
    await jobBoardPage.selectSpecialty(jobBoardPage.container);
    await jobBoardPage.typelocation(jobBoardPage.locationText);
    await jobBoardPage.selectFullTimeButton();
    await jobBoardPage.clickSearch();
    const checkFirstOffferAfterSearch = await jobBoardPage.getInnerTextOfFirstElement();
    await t.expect(jobBoardPage.firstOffer.withText(checkFirstOffer)).notEql((checkFirstOffferAfterSearch));
 });

 test('check if offer click redirects you to right page', async t =>
 {
    const  checkFirstOffer = await jobBoardPage.getInnerTextOfFirstElement();
    await t.click(jobBoardPage.firstOffer);
    await t.expect(jobBoardPage.firstOfferHeader.innerText).eql(checkFirstOffer);
 });

 test('verify if learn more exists and is clickable', async t =>
 {   
    await t.expect(jobBoardPage.learnMoreButton.innerText).eql('Learn More');
    await t.click(jobBoardPage.learnMoreButton);
    await t.expect(jobBoardPage.getHiredButton.innerText).eql('Get Hired');
 });

 test('verify if get pro business exists and is clickable', async t =>
 {   
    await t.expect(jobBoardPage.getProBusinessButton.innerText).eql('Get Pro Business');
    await t.click(jobBoardPage.getProBusinessButton);
    await t.expect(jobBoardPage.readyForProButton.innerText).eql('I’m ready to go Pro');
 });