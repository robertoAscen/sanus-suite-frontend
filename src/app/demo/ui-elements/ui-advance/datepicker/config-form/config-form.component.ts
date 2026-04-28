// Angular Import
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

// project Import
import { ECalendarValue } from '../common/type/calendar-value-enum';
import dayjs, { Dayjs } from 'dayjs';
import { IDatePickerConfig } from '../date-picker/date-picker-config.model';

const GLOBAL_OPTION_KEYS = ['theme', 'locale', 'returnedValueType', 'displayDate'];
const PICKER_OPTION_KEYS = [
  'apiclose',
  'apiopen',
  'appendTo',
  'disabled',
  'disableKeypress',
  'drops',
  'format',
  'openOnFocus',
  'openOnClick',
  'onOpenDelay',
  'opens',
  'placeholder',
  'required',
  'hideInputContainer',
  'hideOnOutsideClick',
  'closeOnEnter'
];
const DAY_PICKER_DIRECTIVE_OPTION_KEYS = [
  'allowMultiSelect',
  'closeOnSelect',
  'closeOnSelectDelay',
  'showGoToCurrent',
  'moveCalendarTo',
  ...PICKER_OPTION_KEYS
];
const DAY_PICKER_OPTION_KEYS = [...DAY_PICKER_DIRECTIVE_OPTION_KEYS];
const MONTH_CALENDAR_OPTION_KEYS = [
  'minValidation',
  'maxValidation',
  'required',
  'max',
  'min',
  'monthBtnFormat',
  'multipleYearsNavigateBy',
  'showMultipleYearsNavigation',
  'yearFormat',
  'showGoToCurrent',
  'unSelectOnClick',
  'moveCalendarTo',
  'numOfMonthRows',
  ...GLOBAL_OPTION_KEYS
];
const DAY_CALENDAR_OPTION_KEYS = new Set([
  'firstDayOfWeek',
  'max',
  'maxValidation',
  'min',
  'minValidation',
  'monthFormat',
  'weekdayNames',
  'showNearMonthDays',
  'showWeekNumbers',
  'enableMonthSelector',
  'dayBtnFormat',
  'weekdayFormat',
  'showGoToCurrent',
  'unSelectOnClick',
  'moveCalendarTo',
  ...MONTH_CALENDAR_OPTION_KEYS
]);

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit {
  // private props
  readonly DAYS = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  readonly dateTypes: { name: string; value: ECalendarValue }[] = [
    {
      name: ECalendarValue[ECalendarValue.Dayjs],
      value: ECalendarValue.Dayjs
    },
    {
      name: ECalendarValue[ECalendarValue.DayjsArr],
      value: ECalendarValue.DayjsArr
    },
    {
      name: ECalendarValue[ECalendarValue.String],
      value: ECalendarValue.String
    },
    {
      name: ECalendarValue[ECalendarValue.StringArr],
      value: ECalendarValue.StringArr
    }
  ];

  localFormat!: string;

  @Input()
  pickerMode!: string;
  @Input()
  config!: IDatePickerConfig;
  @Input() localeVal = 'en';
  @Output() DisplayDateChange = new EventEmitter<Dayjs | string>();
  @Output() DisabledChange = new EventEmitter<boolean>();
  @Output() RequireValidationChange = new EventEmitter<boolean>();
  @Output() MinValidationChange = new EventEmitter<Dayjs>();
  @Output() MaxValidationChange = new EventEmitter<Dayjs>();
  @Output() MinTimeValidationChange = new EventEmitter<Dayjs>();
  @Output() MaxTimeValidationChange = new EventEmitter<Dayjs>();
  @Output() PlaceholderChange = new EventEmitter<string>();
  @Output() ConfigChange = new EventEmitter<Partial<IDatePickerConfig>>();
  @Output() LocaleChange = new EventEmitter<string>();
  @Output() openCalendar = new EventEmitter<void>();
  @Output() closeCalendar = new EventEmitter<void>();
  @Output() moveCalendarTo = new EventEmitter<Dayjs>();

  displayDate = new FormControl();
  material = new FormControl(true);
  disabled = new FormControl(false);
  requireValidation = new FormControl(false);
  minValidation = new FormControl();
  maxValidation = new FormControl();
  minTimeValidation = new FormControl();
  maxTimeValidation = new FormControl();
  placeholder = new FormControl('Select...');
  format!: FormControl;
  locale!: FormControl;
  firstDayOfWeek!: FormControl;
  monthFormat!: FormControl;
  min!: FormControl;
  max!: FormControl;
  minTime!: FormControl;
  maxTime!: FormControl;
  allowMultiSelect!: FormControl;
  closeOnSelect!: FormControl;
  closeOnSelectDelay!: FormControl;
  openOnFocus!: FormControl;
  openOnClick!: FormControl;
  onOpenDelay!: FormControl;
  weekDayFormat!: FormControl;
  disableKeypress!: FormControl;
  drops!: FormControl;
  opens!: FormControl;
  hideInputContainer!: FormControl;
  showNearMonthDays!: FormControl;
  showWeekNumbers!: FormControl;
  enableMonthSelector!: FormControl;
  yearFormat!: FormControl;
  showGoToCurrent!: FormControl;
  hideOnOutsideClick!: FormControl;
  unSelectOnClick!: FormControl;
  dayBtnFormat!: FormControl;
  monthBtnFormat!: FormControl;
  showMultipleYearsNavigation!: FormControl;
  multipleYearsNavigateBy!: FormControl;
  returnedValueType!: FormControl;
  closeOnEnter!: FormControl;
  numOfMonthRows!: FormControl;

  // Life cycle events
  ngOnInit() {
    this.localFormat = ConfigFormComponent.getDefaultFormatByMode(this.pickerMode);
    this.format = new FormControl(ConfigFormComponent.getDefaultFormatByMode(this.pickerMode));
    this.locale = new FormControl(this.localeVal);
    this.firstDayOfWeek = new FormControl(this.config['firstDayOfWeek']);
    this.monthFormat = new FormControl(this.config['monthFormat']);
    this.min = new FormControl(this.config['min']);
    this.max = new FormControl(this.config['max']);
    this.minTime = new FormControl(this.config['minTime']);
    this.maxTime = new FormControl(this.config['maxTime']);
    this.allowMultiSelect = new FormControl(this.config['allowMultiSelect']);
    this.closeOnSelect = new FormControl(this.config.closeOnSelect);
    this.closeOnSelectDelay = new FormControl(this.config.closeOnSelectDelay);
    this.openOnFocus = new FormControl(this.config.openOnFocus);
    this.openOnClick = new FormControl(this.config.openOnClick);
    this.onOpenDelay = new FormControl(this.config.onOpenDelay);
    this.weekDayFormat = new FormControl(this.config['weekDayFormat']);
    this.disableKeypress = new FormControl(this.config.disableKeypress);
    this.drops = new FormControl(this.config.drops);
    this.opens = new FormControl(this.config.opens);
    this.hideInputContainer = new FormControl(this.config.hideInputContainer);
    this.showNearMonthDays = new FormControl(this.config['showNearMonthDays']);
    this.showWeekNumbers = new FormControl(this.config['showWeekNumbers']);
    this.enableMonthSelector = new FormControl(this.config['enableMonthSelector']);
    this.yearFormat = new FormControl(this.config['yearFormat']);
    this.showGoToCurrent = new FormControl(this.config['showGoToCurrent']);
    this.hideOnOutsideClick = new FormControl(this.config.hideOnOutsideClick);
    this.unSelectOnClick = new FormControl(this.config['unSelectOnClick']);
    this.dayBtnFormat = new FormControl(this.config['dayBtnFormat']);
    this.monthBtnFormat = new FormControl(this.config['monthBtnFormat']);
    this.showMultipleYearsNavigation = new FormControl(this.config['showMultipleYearsNavigation']);
    this.multipleYearsNavigateBy = new FormControl(this.config['multipleYearsNavigateBy']);
    this.returnedValueType = new FormControl(this.config['returnedValueType']);
    this.closeOnEnter = new FormControl(this.config.closeOnEnter);
    this.numOfMonthRows = new FormControl(this.config['numOfMonthRows']);
    this.initListeners();
  }

  // private method
  isValidConfig(key: string): boolean {
    switch (this.pickerMode) {
      case 'dayInline':
        return [...DAY_CALENDAR_OPTION_KEYS].includes(key);
      case 'monthInline':
        return [...MONTH_CALENDAR_OPTION_KEYS].includes(key);
      case 'timeInline':
        return [...DAY_PICKER_OPTION_KEYS, ...DAY_CALENDAR_OPTION_KEYS].includes(key);
      case 'dayDirective':
      case 'dayDirectiveReactiveMenu':
        return [...DAY_PICKER_DIRECTIVE_OPTION_KEYS, ...DAY_CALENDAR_OPTION_KEYS].includes(key);
      case 'monthPicker':
        return [...DAY_PICKER_OPTION_KEYS, ...MONTH_CALENDAR_OPTION_KEYS].includes(key);
      case 'monthDirective':
        return [...DAY_PICKER_DIRECTIVE_OPTION_KEYS, ...MONTH_CALENDAR_OPTION_KEYS].includes(key);
      case 'timePicker':
      case 'timeDirective':
      case 'daytimePicker':
      case 'daytimeDirective':
      default:
        return true;
    }
  }

  moveCalendar(): void {
    this.moveCalendarTo.emit(dayjs('2018 Enero 15', 'YYYY MMMM DD', 'es'));
  }

  private initListeners(): void {
    this.displayDate.valueChanges.subscribe((val) => {
      this.DisplayDateChange.emit(val);
    });

    this.disabled.valueChanges.subscribe((val) => {
      this.DisabledChange.emit(val as boolean | undefined);
    });

    this.requireValidation.valueChanges.subscribe((val) => {
      this.RequireValidationChange.emit(val as boolean | undefined);
    });

    this.minValidation.valueChanges.subscribe((val) => {
      this.MinValidationChange.emit(val);
    });

    this.maxValidation.valueChanges.subscribe((val) => {
      this.MaxValidationChange.emit(val);
    });

    this.minTimeValidation.valueChanges.subscribe((val) => {
      this.MinTimeValidationChange.emit(val);
    });

    this.maxTimeValidation.valueChanges.subscribe((val) => {
      this.MaxTimeValidationChange.emit(val);
    });

    this.placeholder.valueChanges.subscribe((val) => {
      this.PlaceholderChange.emit(val as string);
    });

    this.locale.valueChanges.subscribe((locale) => {
      this.LocaleChange.emit(locale);
    });

    this.format.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        format: val
      });
    });

    this.firstDayOfWeek.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        firstDayOfWeek: val
      });
    });

    this.monthFormat.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        monthFormat: val
      });
    });

    this.min.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        min: val
      });
    });

    this.max.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        max: val
      });
    });

    this.minTime.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        minTime: val
      });
    });

    this.maxTime.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        maxTime: val
      });
    });

    this.allowMultiSelect.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        allowMultiSelect: val
      });
    });

    this.closeOnSelect.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        closeOnSelect: val
      });
    });

    this.closeOnSelectDelay.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        closeOnSelectDelay: val
      });
    });

    this.openOnFocus.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        openOnFocus: val
      });
    });

    this.openOnClick.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        openOnClick: val
      });
    });

    this.onOpenDelay.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        onOpenDelay: val
      });
    });

    this.weekDayFormat.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        weekDayFormat: val
      });
    });

    this.disableKeypress.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        disableKeypress: val
      });
    });

    this.drops.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        drops: val
      });
    });

    this.opens.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        opens: val
      });
    });

    this.hideInputContainer.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        hideInputContainer: val
      });
    });

    this.showNearMonthDays.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        showNearMonthDays: val
      });
    });

    this.showWeekNumbers.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        showWeekNumbers: val
      });
    });

    this.enableMonthSelector.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        enableMonthSelector: val
      });
    });

    this.yearFormat.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        yearFormat: val
      });
    });

    this.showGoToCurrent.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        showGoToCurrent: val
      });
    });

    this.hideOnOutsideClick.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        hideOnOutsideClick: val
      });
    });

    this.unSelectOnClick.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        unSelectOnClick: val
      });
    });

    this.dayBtnFormat.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        dayBtnFormat: val
      });
    });

    this.monthBtnFormat.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        monthBtnFormat: val
      });
    });

    this.showMultipleYearsNavigation.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        showMultipleYearsNavigation: val
      });
    });

    this.multipleYearsNavigateBy.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        multipleYearsNavigateBy: val
      });
    });

    this.returnedValueType.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        returnedValueType: val
      });
    });

    this.closeOnEnter.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        closeOnEnter: val
      });
    });

    this.numOfMonthRows.valueChanges.subscribe((val) => {
      this.ConfigChange.emit({
        numOfMonthRows: val
      });
    });
  }

  private static getDefaultFormatByMode(mode: string): string {
    switch (mode) {
      case 'daytimePicker':
      case 'daytimeInline':
        return 'DD-MM-YYYY HH:mm:ss';
      case 'dayPicker':
      case 'dayInline':
      case 'dayDirective':
        return 'DD-MM-YYYY';
      case 'monthPicker':
      case 'monthInline':
      case 'monthDirective':
        return 'MMM, YYYY';
      case 'timePicker':
      case 'timeInline':
      case 'timeDirective':
        return 'HH:mm:ss';
    }
    return 'DD-MM-YYYY HH:mm:ss';
  }
}
