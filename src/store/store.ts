
type UserID = string;

interface chat {
    upvotes: UserID[];
    userID : UserID;
    name: string;
    message: string;
}


export class store {
    constructor() {
        
    }

    initroom(){

    }

    getChats(room:string, limit: numnber ,offset:number){

    }

    addChats(room:string, limit: numnber ,offset:number){
    
    }
    upvote(room:string, chatID: string){

    }


}