import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CommonValidationService } from 'src/app/service/validatoion/common-validation.service';

@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html',
  styleUrls: ['./control-message.component.scss']
})
export class ControlMessageComponent {
  @Input() control!: AbstractControl

  /** 表單錯誤訊息元件建構子 */
  constructor(
    /** Reactive Forms 共用服務 */
    private commonValidationService: CommonValidationService,
  ) {}

  /** 取得錯誤訊息 */
  get errorMessage(): string | null {
    for (const propertyName in this.control.errors) {
      if (Object.prototype.hasOwnProperty.call(this.control.errors, propertyName) && this.control.touched) {
        return this.commonValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName])
      }
    }
    return null
  }
}

