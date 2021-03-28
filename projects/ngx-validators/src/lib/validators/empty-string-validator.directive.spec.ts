import { EmptyStringValidatorDirective, EmptyStringValidator } from './empty-string-validator.directive';
import {FormControl} from '@angular/forms';

describe('EmptyStringValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new EmptyStringValidatorDirective();
    expect(directive).toBeTruthy();
  });

  describe('EmptyStringValidator', () => {
    it('Should pass word', () => {
      const fc = { value: 'orange' } as any;
      expect(EmptyStringValidator(fc)).toBeNull();
    });
    it('Should pass sentence', () => {
      const fc = { value: 'I bought orange.' } as any;
      expect(EmptyStringValidator(fc)).toBeNull();
    });
    it('Should fail half-width space only', () => {
      const fc = { value: ' ' } as any;
      expect(EmptyStringValidator(fc)).not.toBeNull();
    });
    it('Should fail full-width space only', () => {
      const fc = { value: '　' } as any;
      expect(EmptyStringValidator(fc)).not.toBeNull();
    });
    it('Should fail tab only', () => {
      const fc = { value: '\t' } as any;
      expect(EmptyStringValidator(fc)).not.toBeNull();
    });
    it('Should fail new-line only', () => {
      const fc = { value: '\n' } as any;
      expect(EmptyStringValidator(fc)).not.toBeNull();
    });
    it('Should fail empty string', () => {
      const fc = { value: '' } as any;
      expect(EmptyStringValidator(fc)).not.toBeNull();
    });
    it('Should fail various non-printable characters only', () => {
      const fc = { value: ' 　\t\n' } as any;
      expect(EmptyStringValidator(fc)).not.toBeNull();
    });
    it('Should pass word surrounded half-width', () => {
      const fc = { value: ' banana ' } as any;
      expect(EmptyStringValidator(fc)).toBeNull();
    });
    it('Should pass word surrounded full-width', () => {
      const fc = { value: '　orange　' } as any;
      expect(EmptyStringValidator(fc)).toBeNull();
    });
    it('Should pass word surrounded various non-printable characters', () => {
      const fc = { value: ' 　coffee\t\n' } as any;
      expect(EmptyStringValidator(fc)).toBeNull();
    });
  });
});
