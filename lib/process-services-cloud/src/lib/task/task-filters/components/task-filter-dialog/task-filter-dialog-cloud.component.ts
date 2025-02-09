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

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'adf-cloud-task-filter-dialog',
  templateUrl: './task-filter-dialog-cloud.component.html',
  styleUrls: ['./task-filter-dialog-cloud.component.scss']
})
export class TaskFilterDialogCloudComponent implements OnInit {

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static ACTION_SAVE = 'SAVE';
    defaultIcon = 'inbox';

    filterForm: UntypedFormGroup;

    constructor(
        private fb: UntypedFormBuilder,
        public dialogRef: MatDialogRef<TaskFilterDialogCloudComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }

    ngOnInit() {
        this.filterForm = this.fb.group({
            name: [this.data.name, Validators.required]
        });
    }

    onSaveClick() {
        this.dialogRef.close({
            action: TaskFilterDialogCloudComponent.ACTION_SAVE,
            icon: this.defaultIcon,
            name: this.nameController.value
        });
    }

    onCancelClick() {
        this.dialogRef.close();
    }

    get nameController(): AbstractControl {
        return this.filterForm.get('name');
    }

    isValid(): boolean {
        return this.filterForm.valid;
    }
}
