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

import { Observable, Subject } from 'rxjs';
import { ProcessInstanceCloud } from '../start-process/models/process-instance-cloud.model';
import { ProcessDefinitionCloud } from '../../models/process-definition-cloud.model';
import { ApplicationVersionModel } from '../../models/application-version.model';

export interface ProcessCloudInterface {

    dataChangesDetected: Subject<ProcessInstanceCloud>;

    getProcessInstanceById(appName: string, processInstanceId: string): Observable<ProcessInstanceCloud>;
    getProcessDefinitions(appName: string): Observable<ProcessDefinitionCloud[]>;
    getApplicationVersions(appName: string): Observable<ApplicationVersionModel[]>;
    cancelProcess(appName: string, processInstanceId: string): Observable<ProcessInstanceCloud>;
}
