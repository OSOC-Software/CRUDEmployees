import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee: Employee = new Employee()
  name
  lastname
  email
  idParam: number
  constructor(private employeeService: EmployeeService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(data => {
      if (data && data['id']) {
        this.idParam = data['id']
        this.employeeService.searchEmployeebyId(this.idParam)
          .subscribe((data) => {
            this.employee = data
          })
      }
    })
  }

  ngOnInit(): void { }

  private saveEmployee() {
    this.employeeService.registerNewEmployee(this.employee)
      .subscribe(
        data => {
          console.log(data)
          swal('Registered Employee', `The employee ${this.employee.name}has been registered successfully ! `)
          this.returnToListEmployees()
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

  private returnToListEmployees() {
    this.router.navigate(["/employees"])
  }

  onSubmit() {
    this.saveEmployee()
  }



}
