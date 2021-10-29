LOAD CSV FROM 'file:///assets.csv' AS row
WITH row WHERE row.id IS NOT NULL
MERGE (c:Asset {serialNumber:row.serialNumber, description: row.description, id: row.id, title: row.title, type: row.type, picture: row.picture});
