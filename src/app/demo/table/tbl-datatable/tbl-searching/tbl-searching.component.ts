// angular import
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { DataTableDirective, DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-tbl-searching',
  standalone: true,
  imports: [CommonModule, DataTablesModule, SharedModule],
  templateUrl: './tbl-searching.component.html',
  styleUrl: './tbl-searching.component.scss'
})
export class TblSearchingComponent implements OnInit, AfterViewInit {
  // public method
  dtColumnSearchingOptions: object = {};
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  // Life cycle events
  ngOnInit() {
    this.dtColumnSearchingOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Position',
          data: 'position'
        },
        {
          title: 'Office',
          data: 'office'
        },
        {
          title: 'Age',
          data: 'age'
        },
        {
          title: 'Start Date',
          data: 'date'
        },
        {
          title: 'Salary',
          data: 'salary'
        }
      ],
      responsive: true
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        // eslint-disable-next-line
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          const inputElement = this as HTMLInputElement; // Explicitly specify type as HTMLInputElement
          if (that.search() !== inputElement.value) {
            that.search(inputElement.value).draw();
          }
        });
      });
    });
  }
}
