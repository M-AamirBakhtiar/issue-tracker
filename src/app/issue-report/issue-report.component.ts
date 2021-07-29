import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private issueService: IssuesService) {}

  ngOnInit(): void {
    this.issueForm = this.fb.group({
      title: [''],
      description: [''],
      priority: [''],
      type: [''],
    });
  }

  addIssue(): void {
    this.issueService.createIssue(this.issueForm?.value);
  }
}
