import { validUser } from '../../data/user';
import accountPage from '../../pageObjects/accountPage';
import faker from 'faker';

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
   //await t.expect(accountPage.successMsg).eql('Profile updated successfully');
});
*/

/*
test('should edit bio', async t => {
   let randomBio = faker.lorem.paragraph().toString();
   accountPage.clearInput(accountPage.bioInput);
   await t.typeText(accountPage.bioInput, randomBio);
   await t.click(accountPage.saveProfileButton);
   await t.expect((accountPage.successMsg).value).contains('Profile updated successfully')
});
*/

 /* 
test('should select top specialties and add years of experience', async t => {
    await t.click(accountPage.leadershipSpecialities);
      await t.click(accountPage.selectYearsWidget);
      await t.click(accountPage.experience3years);
      await t.click(accountPage.saveProfileButton);
   
});
*/

test('should edit job history', async t =>{
   let randomTitle = faker.commerce.department().toString();
   let randomCompany = faker.company.companyName().toString();
   accountPage.clearInput(accountPage.editJobHistoryTitle);
   accountPage.clearInput(accountPage.editJobHistoryComapny);
   await t.typeText(accountPage.editJobHistoryTitle, randomTitle);
   await t.typeText(accountPage.editJobHistoryCompany, randomCompany);
});