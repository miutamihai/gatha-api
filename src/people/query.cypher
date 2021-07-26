MATCH (person: Person)
WHERE person.name = $name
RETURN person
