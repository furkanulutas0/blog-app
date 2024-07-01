## Kurulum 


1.  ```git clone <repo linki>```
2.  ```cd blog-app```
3.  ```npm install && cd client && npm install```
4.  /blog-app ve /client klasörü içerisinde iken:
  ```npm run dev``` yazarak backend ve frontend sunucusunu çalıştırınn.
5. localhost:5173 portundan websitesine erişebilirsiniz. 

Sample .env Dosyası: 

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb+srv://<your_mongodb_username>:<your_mongodb_pass>@cluster0.9lyx2fq.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0"
API_KEY="1234567890"
```


Furkan Ulutaş
202103011085
Internet Web Teknolojileri
