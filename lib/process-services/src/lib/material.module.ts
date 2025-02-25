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

import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'never' } }
    ],
    imports: [
        MatAutocompleteModule, MatButtonModule, MatCardModule, MatDialogModule,
        MatCheckboxModule, MatDatepickerModule, MatGridListModule, MatIconModule, MatInputModule,
        MatListModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatTableModule,
        MatTabsModule, MatProgressSpinnerModule, MatNativeDateModule, MatRippleModule, MatTooltipModule,
        MatChipsModule, MatMenuModule
    ],
    exports: [
        MatAutocompleteModule, MatButtonModule, MatCardModule, MatDialogModule,
        MatCheckboxModule, MatDatepickerModule, MatGridListModule, MatIconModule, MatInputModule,
        MatListModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatTableModule,
        MatTabsModule, MatProgressSpinnerModule, MatNativeDateModule, MatRippleModule, MatTooltipModule,
        MatChipsModule, MatMenuModule
    ]
})
export class MaterialModule {}
