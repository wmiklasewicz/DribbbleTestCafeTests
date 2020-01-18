import { t } from "testcafe";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const env = args.env || "https://dribbble.com/";
const baseUrl = env.endsWith('/') ? env : `${env}/`;

const basePage = {
  baseUrl,

  /**
   * wrapper for navigateTo
   * @param  {string} relativeUrl
   */
  async goto(relativeUrl = '') {
    await t.navigateTo(`${this.baseUrl}${this.url}${relativeUrl}`);
  }
}
export default basePage