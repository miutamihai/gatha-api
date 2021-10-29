LOAD CSV FROM 'file:///users.csv' AS row
WITH row WHERE row.id IS NOT NULL
MERGE (c:User {lastName: row.lastName, firstName: row.firstName, personalId: row.personalId, phone: row.phone, id: row.id, email: row.email, picture: row.picture});
