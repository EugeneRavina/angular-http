import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/dashboard.service';
import { Book } from 'src/app/shared/models/book';
import { Reader } from 'src/app/shared/models/reader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  bookList: Book[];
  readerList: Reader[];

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllReaders();
  }

  getAllBooks() {
    this.dashboardService.getBooksList().subscribe(books => {
      this.bookList = books;
    });
  }

  getAllReaders() {
    this.dashboardService.getReadersList().subscribe(reader => {
      this.readerList = reader;
    })
  }

}
