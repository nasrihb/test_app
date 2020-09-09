import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator'
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listes-utilisateurs',
  templateUrl: './listes-utilisateurs.component.html',
  styleUrls: ['./listes-utilisateurs.component.css']
})
export class ListesUtilisateursComponent implements OnInit {
  userForm: FormGroup;
  updateForm: FormGroup;
  usersColumns = ['select', 'nom' , 'prenom', 'email'];
  selection = new SelectionModel <any>(true, []);
  listusers = new MatTableDataSource <any>(); lengthTable: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  nom: string;
  prenom: string;
  email: string;
  constructor(private fb : FormBuilder, private userservice: UserService) { }

  ngOnInit(){
    this.formcontrols();
    this.get_list_users();
  }

  formcontrols(){
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmpass: ['',[this.ConfirmValidator]]
      });
      this.updateForm = this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
      });
  }

  ConfirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.userForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }
  public hasError2 = (controlName: string, errorName: string) => {
    return this.updateForm.controls[controlName].hasError(errorName);
  }
  add_user(){
  const user = new User(
    null,
   this.userForm.value.nom,
   this.userForm.value.prenom,
   this.userForm.value.email,
   this.userForm.value.password,
  'user'
    );
  this.userservice.create(user).subscribe(data =>{

    setTimeout(() => {
      Swal.fire(
        'utilisateur est ajouté avec succés !',
        '',
        'success',
      )
    }, 500);
    this.get_list_users();
    this.userForm.reset();
    },err =>{
      setTimeout(() => {
        Swal.fire(
          'Erreur d ajout!',
          '',
          'error',
        )
      }, 500);
    });
      }
  update_user(){
    this.selection.selected.forEach(element => {
      this.nom = element.nom;
      this.prenom = element.prenom;
      this.email = element.email;
      const user = new User(
      element.id,
      this.updateForm.value.nom,
      this.updateForm.value.prenom,
      this.updateForm.value.email,
      element.password,
      element.role
        );
      this.userservice.update(element.id, user).subscribe(res => {
        setTimeout(() => {
          Swal.fire(
            'utilisateur est Modifié avec succés !',
            '',
            'success',
          )
        }, 500);
        this.get_list_users();
        this.userForm.reset();
      }, err =>{
        setTimeout(() => {
          Swal.fire(
            'Erreur de modification',
            '',
            'error'
          )
        }, 500);
      });
    
    });
  }
  get_list_users(){
    this.userservice.getusers().subscribe(data=>{
    const list: Array<any> = [];
              data.forEach(element => {
                const obj = new User(
                  element.id_user,
                  element.nom,
                  element.prenom,
                  element.email,
                  element.password,
                  element.role,
                );
                list.push(obj);

    });
      this.listusers = new MatTableDataSource(list);
      this.listusers.sort = this.sort;
      this.listusers.paginator = this.paginator;
    });
    }
  deleteuser(){

    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Confirmer',
      reverseButtons: false

    }).then((resultat) => {
      console.log(resultat.value);
      console.log(resultat.dismiss);

      if (resultat.value) {

        this.selection.selected.forEach(element => {

          this.userservice.delete(element.id).subscribe(res => {
            setTimeout(() => {
              Swal.fire(
                'Supprimé!',
                '',
                'success',
              )
            }, 500);
            this.get_list_users();
          }
            , err => {
              setTimeout(() => {
                Swal.fire(
                  'Annulé',
                  '',
                  'error'
                )
              }, 500);
            });
        });
        this.selection.clear();
      }
      else if (resultat.dismiss === Swal.DismissReason.cancel) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        setTimeout(() => {
          Swal.fire(
            'Annulé',
            '',
            'error'
          )
        }, 500);

        this.selection.clear();

      }
    }).catch(e => { console.log(e) })
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listusers.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.listusers.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;

    }
  }



}
