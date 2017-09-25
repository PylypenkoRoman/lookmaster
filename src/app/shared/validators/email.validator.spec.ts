import { EmailValidator } from './email.validator';

describe('EmailDirective', () => {
  it('should create an instance', () => {
    const directive = new EmailValidator();
    expect(directive).toBeTruthy();
  });
});
