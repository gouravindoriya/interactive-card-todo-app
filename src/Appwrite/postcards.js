


import conf from "../conf/conf"
import { Client, Databases, Storage, Query, ID } from "appwrite";


export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
 
    async createPost({title, description,color,top,left,id}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title, description,color,top,left,id   // id=userid
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost() :: ", error);
            return false
        }
    }



    async getPosts(userID){ // seacrch as id 
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                
                    Query.equal("id", [userID])
                    // Query.equal("id", [`${userID}`])
                
               
                ]
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts() :: ", error);
            return false
        }
    }
    async delete(documentId){ 
    
        try {
            return await service.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, // collectionId
               `${documentId}`  // documentId
            );
        } catch (error) {
            console.log( "Appwrite service :: deletepost() :: ",error);
            return false
        }
    }

 

    

   
}


const service = new Service()
export default service;