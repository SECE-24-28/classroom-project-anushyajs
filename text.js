//simple Mongodb CURD Operations Examples
const {MongoClient,objectId}=require('mongodb');

//MongoDB connection URL and Database name
const url='mongodb://localhost:27017/';//your mongoDB URL
const dbName='studentDB';//your database name
const  collectionName='user';//your collection name

//Create a new MongoClient
const client=new MongoClient(url);

async function main(){

    try{
        //Connect to MongoDB
        await client.connect();
        console.log('connect succesfully to mongoDB');

        const db =client.db(dbName);
        const collection=db.collection(collectionName);

        //1.CREATE (Insert/Write Data)
     console.log('\n----INSERT OPERATION-----');
       const newUser={name:'John Doe',email:'john@example.com',age:30};
       const insertResult=await collection.insertOne(newUser);
        console.log('Insert document:',insertResult.insertedId);
        
       //2.CREATE (InsertMany/Write Data)
        //console.log('\n----INSERTMANY OPERATION-----');
        //const newUser=[{name:'John Doe',email:'john@example.com',age:30},{name:'anu',email:'anu@example.com',age:18},{name:'vini',email:'vini@example.com',age:18}];
        //const insertResult=await collection.insertMany(newUser);
        //console.log('Insert document:',insertResult.insertedId);

         //2.CREATE (updatetOne/Write Data)
        //console.log('\n----UpdateOne-----');
        //const newUser=[{name:'John Doe',email:'john@example.com',age:30},{name:'anu',email:'anu@example.com',age:18},{name:'vini',email:'vini@example.com',age:18}];
        //const insertResult=await collection.insertMany(newUser);
        //console.log('Insert document:',insertResult.insertedId);

        
        } catch(error){
            console.error('Error:',error);
        } finally{
            await client.close();
            console.log('\nConnection closed');
    }
}
main();