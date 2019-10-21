import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-table',
  templateUrl: './complete-table.component.html',
  styleUrls: ['./complete-table.component.css']
})
export class CompleteTableComponent implements OnInit {
 public head=['Employee No',
                    'Employee Name',
                   'SIN No',
                   'Pay Type',
                    'Phone Number',
                    'Address',
                    'Date',
                    'Employee No',
                    'Employee Category',
                   'Sales Incentive',
                    'Collector license No',
                    'Hourly Rate',
                   'Yearly Salary',
                    'File Closed status',
                    'List of Files Assigned']
  constructor() { }

  ngOnInit() {
  }

}
