SELECT cities.name FROM cities, states 
WHERE states.name='California' AND cities.state_id=states.id 
ORDER BY cities.id ASC;
