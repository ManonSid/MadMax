export class Article {
    id: number;
    titre: string;
    contenu: string;
    image: string;
    constructor(id=null, titre=null, contenu=null, image=null) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.image = image;
    }
}