import { validUser } from '../../data/user';
import loginPage from '../../pageObjects/loginPage';
import basePage from '../../pageObjects/basePage';

fixture('Edit personal profile')
.beforeEach(async t => {
   await t.useRole(validUser);
});

test('should edit user name and location', async t => {

});