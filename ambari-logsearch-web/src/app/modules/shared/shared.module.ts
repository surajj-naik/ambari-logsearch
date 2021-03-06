/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsService as Angular2NotificationsService } from 'angular2-notifications/src/notifications.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgObjectPipesModule } from 'angular-pipes';

import { TranslateService as AppTranslateService } from '@app/services/translate.service';

import { NotificationService } from './services/notification.service';

import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { DisableControlDirective } from './directives/disable-control.directive';

import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { DataLoadingIndicatorComponent } from '@app/modules/shared/components/data-loading-indicator/data-loading-indicator.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { CircleProgressBarComponent } from './components/circle-progress-bar/circle-progress-bar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

import { TimeZoneMapInputComponent } from './components/time-zone-map-input/time-zone-map-input.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgObjectPipesModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: AppTranslateService.httpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    DisableControlDirective,
    DropdownButtonComponent,
    DropdownListComponent,
    FilterDropdownComponent,
    ModalComponent,
    DataLoadingIndicatorComponent,
    ModalDialogComponent,
    LoadingIndicatorComponent,
    CircleProgressBarComponent,
    UserSettingsComponent,
    TimeZoneMapInputComponent
  ],
  providers: [
    Title,
    NotificationService,
    CanDeactivateGuardService,
    Angular2NotificationsService
  ],
  exports: [
    DisableControlDirective,
    DropdownButtonComponent,
    DropdownListComponent,
    FilterDropdownComponent,
    ModalComponent,
    DataLoadingIndicatorComponent,
    ModalDialogComponent,
    LoadingIndicatorComponent,
    CircleProgressBarComponent,
    UserSettingsComponent,
    TimeZoneMapInputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
