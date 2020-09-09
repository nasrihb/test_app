export class Conge {
    id: number;
    date_debut: Date;
    date_fin: Date;
    type_conge: string;
    raison: string;
    id_user: number;

    constructor(  id: number, date_debut: Date, date_fin: Date, type_conge: string, raison: string, id_user: number) {
    this.id = id;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.type_conge = type_conge;
    this.raison = raison;
    this.id_user = id_user;
}
}
