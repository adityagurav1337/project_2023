var Database = require("./database");

class Login{
    constructor(){
        this.id = 0;
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.password = "";
        this.city = "";
        this.age = "";
        this.query = "";
        this.db = new Database()
    }

    save = ()=>{
      this.query = "INSERT INTO Users(name, email, mobileno, password, city, age)";
      this.query += 
      "VALUES('"+ this.name +"', '"+ this.email + "', '"+
        this.mobileno + "',  '"+ this.password + "', '"+ this.city +"', '"+ this.age +"')";

          console.log("query : "+this.query);
      return new Promise((resolve, reject)=>{
        this.db.query(this.query, (err, result)=>{
             if(err)
             
                  reject(err);
             
             else
                resolve(result);
             
        });
     
    });
}



list = ()=>{
    this.query = "SELECT *FROM Login ORDER BY name";
    return new Promise((resolve, reject)=>{
      this.db.query(this.query, (err, result)=>{
           if(err)
                reject(err);
           else
              resolve(result);
           
      })
   
  });
}



get = ()=>{
    this.query = "INSERT INTO Login WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{
      this.db.query(this.query, (err, result)=>{
           if(err)
           
                reject(err);
           
           else
              resolve(result);
           
      });
   
  });
}



update = ()=>{
    this.query = "UPDATE Login ";
    this.query += "SET name  = '" + this.name +"',";
    this.query += "email  = '" + this.email +"',";
    this.query += "mobileno  = '" + this.mobileno +"',";
    this.query += "password  = '" + this.password +"',";
    this.query += "city  = '" + this.city +"',";
    this.query += "age  = '" + this.age +"',";
    this.query += "WHERE id =" + this.id;
    return new Promise((resolve, reject)=>{
      this.db.query(this.query, (err, result)=>{
           if(err)
           
                reject(err);
           
           else
              resolve(result);
           
      });
   
  });
}


delete = ()=>{
    this.query = "DELETE FROM Login WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{
      this.db.query(this.query, (err, result)=>{
           if(err)
           
                reject(err);
           
           else
              resolve(result);
           
      })
      
  });
}
}

module.exports = {
    Login:Login
}
