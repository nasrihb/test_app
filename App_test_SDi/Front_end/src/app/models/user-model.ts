export class User{
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    role : string;

    constructor( id: number, nom: string, prenom: string, email: string, password: string, role:string){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.role = role;
    }
}