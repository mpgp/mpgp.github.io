import { FieldValidator } from './field-validator';

export class Field {
  public description: string;
  public name: string;
  public required: boolean;
  public type: string;
  public validators: FieldValidator[];

  constructor(json: any = null) {
    if (json) {
      this.description = json.description || '';
      this.name = json.name || '';
      this.required = json.required || false;
      this.type = json.type || '';
      this.validators = (json.validators && json.validators.map(x => new FieldValidator(x.name, x.value))) || [new FieldValidator('minValue', 1), new FieldValidator('maxValue', 10)];
    } else {
      this.description = 'A description for anyField.';
      this.name = 'anyField';
      this.required = true;
      this.type = 'string';
      this.validators = [
        new FieldValidator('maxLength', 12),
        new FieldValidator('minLength', 3),
        new FieldValidator('pattern', '^[a-zA-Z 0-9]+$')
      ];
    }
  }
}
