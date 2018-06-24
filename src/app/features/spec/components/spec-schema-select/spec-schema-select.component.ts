import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-schema-select',
  styleUrls: ['./spec-schema-select.component.scss'],
  templateUrl: './spec-schema-select.component.html',
})
export class SpecSchemaSelectComponent {
  @Input() currentSchema: string;

  @Output() schemaChange = new EventEmitter<string>();

  onSchemaChange(schema: string): void {
    this.schemaChange.emit(schema);
  }
}
