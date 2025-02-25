/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormFieldModel, FormFieldOption, FormFieldTypes, FormModel, setupTestBed } from '@alfresco/adf-core';
import { FormCloudService } from '../../../services/form-cloud.service';
import { RadioButtonsCloudWidgetComponent } from './radio-buttons-cloud.widget';
import { ProcessServiceCloudTestingModule } from '../../../../testing/process-service-cloud.testing.module';
import { of } from 'rxjs';

describe('RadioButtonsCloudWidgetComponent', () => {
    let fixture: ComponentFixture<RadioButtonsCloudWidgetComponent>;
    let widget: RadioButtonsCloudWidgetComponent;
    let formCloudService: FormCloudService;
    let element: HTMLElement;
    const restOption: FormFieldOption[] = [
        {
            id: 'opt-1',
            name: 'opt-name-1'
        },
        {
            id: 'opt-2',
            name: 'opt-name-2'
        }
    ];

    setupTestBed({
        imports: [
            TranslateModule.forRoot(),
            ProcessServiceCloudTestingModule
        ]
    });

    beforeEach(() => {
        formCloudService = TestBed.inject(FormCloudService);
        spyOn(formCloudService, 'getRestWidgetData').and.returnValue(of(restOption));
        fixture = TestBed.createComponent(RadioButtonsCloudWidgetComponent);
        widget = fixture.componentInstance;
        element = fixture.nativeElement;
        widget.field = new FormFieldModel(new FormModel(), { restUrl: '<url>' });
    });

    it('should update form on values fetched', () => {
        const taskId = '<form-id>';
        const fieldId = '<field-id>';

        const form = new FormModel({
            taskId
        });

        widget.field = new FormFieldModel(form, {
            id: fieldId,
            restUrl: '<url>'
        });
        const field = widget.field;
        spyOn(field, 'updateForm').and.stub();

        widget.ngOnInit();
        expect(field.updateForm).toHaveBeenCalled();
    });

    it('should update the field value when an option is selected', () => {
        spyOn(widget, 'onFieldChanged').and.stub();
        widget.onOptionClick('fake-opt');

        expect(widget.field.value).toEqual('fake-opt');
    });

    it('should show radio buttons as text when is readonly', async () => {
        widget.field = new FormFieldModel(new FormModel({}), {
            id: 'radio-id',
            name: 'radio-name',
            type: FormFieldTypes.RADIO_BUTTONS,
            readOnly: true
        });
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        expect(element.querySelector('display-text-widget')).toBeDefined();
    });

    it('should be able to set label property for Radio Button widget', () => {
        widget.field = new FormFieldModel(new FormModel({}), {
            id: 'radio-id',
            name: 'radio-name-label',
            type: FormFieldTypes.RADIO_BUTTONS,
            readOnly: true
        });
        fixture.detectChanges();
        expect(element.querySelector('label').innerText).toBe('radio-name-label');
    });

    it('should be able to set a Radio Button widget as required', async () => {
        widget.field = new FormFieldModel(new FormModel({}), {
            id: 'radio-id',
            name: 'radio-name-label',
            type: FormFieldTypes.RADIO_BUTTONS,
            readOnly: false,
            required: true,
            optionType: 'manual',
            options: restOption,
            restUrl: null
        });

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        const widgetLabel = element.querySelector('label');
        expect(widgetLabel.innerText).toBe('radio-name-label*');
        expect(widget.field.isValid).toBe(false);

        const option = element.querySelector<HTMLElement>('#radio-id-opt-1 label');
        option.click();

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        const selectedOption = element.querySelector<HTMLElement>('[class*="mat-radio-checked"]');
        expect(selectedOption.innerText).toBe('opt-name-1');
        expect(widget.field.isValid).toBe(true);
    });

    it('should be able to set a Radio Button widget as required', () => {
        widget.field = new FormFieldModel(new FormModel({}), {
            id: 'radio-id',
            name: 'radio-name-label',
            type: FormFieldTypes.RADIO_BUTTONS,
            readOnly: false,
            required: true,
            optionType: 'manual',
            options: restOption,
            restUrl: null,
            value: 'opt-name-2'
        });

        fixture.detectChanges();
        const selectedOption = element.querySelector<HTMLElement>('[class*="mat-radio-checked"]');
        expect(selectedOption.innerText).toBe('opt-name-2');
        expect(widget.field.isValid).toBe(true);
    });

    it('should be able to set a Radio Button widget when rest option enabled', () => {
        widget.field = new FormFieldModel(new FormModel({}), {
            id: 'radio-id',
            name: 'radio-name-label',
            type: FormFieldTypes.RADIO_BUTTONS,
            readOnly: false,
            required: false,
            optionType: 'rest',
            options: [],
            restUrl: 'http://mocky.com/mocky-12344',
            value: { id: 'opt-1' }
        });

        fixture.detectChanges();
        const selectedOption = element.querySelector<HTMLElement>('[class*="mat-radio-checked"]');
        expect(selectedOption.innerText).toBe('opt-name-1');
        expect(widget.field.isValid).toBe(true);
    });
});
