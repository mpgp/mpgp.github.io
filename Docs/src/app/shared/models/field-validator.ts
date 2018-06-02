export class FieldValidator {
  public name: string;
  public value: number | string | boolean;

  constructor(name: string, value: number | string | boolean) {
      this.name = name;
      this.value = value;
  }
}
