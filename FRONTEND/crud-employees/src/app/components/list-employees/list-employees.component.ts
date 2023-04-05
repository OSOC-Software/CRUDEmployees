import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[]

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  private getAllEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe(
        (data) => { this.employees = data },
        (error) => {
          console.error(error)
          swal(
            'Error  !',
            'Verify: ' + error,
            'error'
          )
        })
  }

  public editEmployee(id: number) {
    this.router.navigate(["/edit-employee", id])
  }

  public deleteEmployee(id: number) {
    swal({
      title: " Are you sure ? ",
      text: "Confirm for delete user... ",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete ! ",
      cancelButtonText: "No, cancel ! ",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.employeeService.deleteEmployee(id)
          .subscribe(
            data => {
              swal(
                'Employee deleted !',
                'Successful removal',
                'success'
              )
              this.getAllEmployees()
            },
            error => {
              console.error(error)
              swal(
                'Error  !',
                'Verify: ' + error,
                'error'
              )
            })
      }
    })
  }

  public viewDetailEmployee(id: number) {
    this.router.navigate(['/detail-employee/', id])
  }

}
