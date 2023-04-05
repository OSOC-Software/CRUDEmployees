import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

  id: number
  employee: Employee = new Employee()
  

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.searchEmployeebyId(this.id)
      .subscribe(
        data => {
          this.employee = data
          swal( `Details fo Employee: ${this.employee.name}`, )
        })
  }

}
