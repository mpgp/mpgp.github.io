export class FieldValidator {
  name: string;
  value: number | string | boolean;

  constructor(name: string, value: number | string | boolean) {
    this.name = name;
    this.value = value;
  }
}
