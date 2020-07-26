export class BlogPost {
    title:string;
    summary:string;
    isFav?:boolean;
    
    constructor(title:string,summary:string){
        this.title=title;
        this.summary=summary;


    }
}
