import {App} from '../../src/app';
import {Helper} from "../util/helper";

describe('the app', () => {
  it('says hello', () => {
    let h = new Helper();
    h.Property = "Testing";
    expect(h.Property).toBe("Testing");
    expect(new App().message).toBe('Hello World!');
  });
});
