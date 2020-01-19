import { validUser } from '../../data/user';
import accountPage from '../../pageObjects/accountPage';
import faker from 'faker';
import { Selector } from 'testcafe';

fixture('Edit personal profile')
.beforeEach(async t => {
   await t.useRole(validUser);
   await accountPage.goto();
});

/*
test('should edit user name and location', async t => {
   let randomName = faker.name.findName().toString();
   let randomLocation = faker.address.city().toString();
   accountPage.clearInput(accountPage.nameInput);
   await t.typeText(accountPage.nameInput, randomName);
   accountPage.clearInput(accountPage.locationInput);
   await t.typeText(accountPage.locationInput, randomLocation);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.nameInput).value).eql(randomName);
   await t.expect((accountPage.locationInput).value).eql(randomLocation);
   await t.expect((accountPage.successMsg).exists).ok();
});
*/

/*
test('should edit bio', async t => {
   let randomBio = faker.lorem.paragraph().toString();
   accountPage.clearInput(accountPage.bioInput);
   await t.typeText(accountPage.bioInput, randomBio);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.successMsg).exists).ok();
});
*/



/*test('should select top specialties and add years of experience', async t => {
   let label  =  accountPage.ilustrationSpecialities;
   if (label.checked == true){
      await t.click(accountPage.ilustrationSpecialities);
   }
   await t.wait(63333);
   
   //await t.click(accountPage.selectYearsWidget);
   //await t.click(accountPage.experience3years);
   //await t.click(accountPage.saveProfileButton);
});*/

/*
test('should try to save profile without name', async t => {
   accountPage.clearInput(accountPage.nameInput);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.errorMsg).exists).ok();

});
*/
/*
test('should edit job history', async t =>{
   await accountPage.goto();
   let randomTitle = faker.commerce.department().toString();
   let randomCompany = faker.company.companyName().toString();
   accountPage.clearInput(accountPage.jobHistoryTitle);
   accountPage.clearInput(accountPage.jobHistoryCompany);
   await t.typeText(accountPage.jobHistoryTitle, randomTitle);
   await t.typeText(accountPage.jobHistoryCompany, randomCompany);
   await t.click(accountPage.startMonthJobDropBox);
   await t.click(accountPage.monthValue);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.jobHistoryTitle).value).eql(randomTitle);
   await t.expect((accountPage.jobHistoryCompany).value).eql(randomCompany);
   await t.expect((accountPage.successMsg).exists).ok();
});*/

/*
test('should edit online presence values', async t =>{
   await accountPage.goto();
   let randomUrl = faker.internet.url().toString();
   accountPage.clearInput(accountPage.personalWebsite);
   await t.typeText(accountPage.personalWebsite, randomUrl);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.successMsg).exists).ok();
});
*/

/*test('should upload and delete avatar', async t =>{
   await accountPage.goto();
   await t.setFilesToUpload(accountPage.userAwatarButton,[
      '../../data/images/awatar.jpg'
   ])
   await t.click(accountPage.uploadNowButton);
   await t.expect(accountPage.awatarMsg.withText('Upload in progress. Refresh in a few moments to see your new avatar.')).ok();
   await t.eval(() => location.reload(true));
   await t.setNativeDialogHandler(() => true);
   await t.click(accountPage.deleteAwatarButton);
   await t.expect(accountPage.awatarMsg.withText('Avatar deleted')).ok();
});*/

/*
   test('should edit work availability', async t => {
   
      let salaryProfile = accountPage.salaryProfile;
      let startingProfile = accountPage.profileStarting;
      let startingOption = startingProfile.find('option');
      let salaryOption = salaryProfile.find('option');
      let isChecked  = await t.expect((accountPage.workAvailabilitySection).exists).ok();
      await t.wait(1000);
         if(isChecked == true){
          accountPage.uncheckOption();
         }
      await t.wait(5000);

   await t.click(accountPage.fullTimeCheckBox);
   await t.click(salaryProfile);
   await t.click(salaryOption.withText('50-60k'));
   await t.expect(salaryProfile.value).eql('50-60k');
   await t.click(startingProfile);
   await t.click(startingOption.withText('immediately'));
   await t.expect(startingProfile.value).eql('immediately');
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.successMsg).exists).ok();
   
});
*/
/*
test('should add new skill', async  t =>{
   let randomSkill = faker.lorem.word().toString();
   await t.click(accountPage.skillsInput);
   await t.pressKey('delete');
   await t.typeText(accountPage.skillsInput, randomSkill);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.successMsg).exists).ok();
});*/

