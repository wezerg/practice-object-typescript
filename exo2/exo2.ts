interface Administrateur {
    nom : string,
    email : string ,
    ip : string ,
    dt_connexion : Date ,
    login : string,
    password : string
}
type UtilisateurAnonyme = Pick<Administrateur, "nom" | 'ip'>;
const userAnonyme: UtilisateurAnonyme = {nom: "Jean", ip: "10.255.56.86"};
console.log(userAnonyme);
