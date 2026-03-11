

quick_installation.md:
 ```cmd
git clone https://github.com/
cd ternat
npm install
node op conf:generate
node op key:generate
node op migrate
node op db:seed
npm run dev
```


endpoints.md
# Végpontok

## team

| Végpont | Metódus | Auth | CRUD | Leírás |
| - | - | - | - | - |
| /teams | GET | igen | read | Csapat lekérése
| /teams| POST | igen | create | Csapat létrehozása
| /teams/:id | PUT | igen | update | Csapat módosítása
| /teams/:id | DELETE | igen | delete | Csapat törlése

### Csapat lekérdezése

* /api/teams/ GET

### Csapat létrehozás

* /api/teams/ POST

```JSON
  {
	"success": true,
	"data": {
		"id": 4,
		"name": "gyongyi",
		"city": "titok",
		"league": "nb1",
		"updatedAt": "2026-03-08T15:22:59.687Z",
		"createdAt": "2026-03-08T15:22:59.687Z"
	}
	
}
```

### Csapat módosítása

* /api/teams/4 PUT

```JSON
    {
	"success": true,
	"data": {
		"id": 4,
		"name": "Dzsudzsák Balázs",
		"city": "Debrecen",
		"league": "nb1",
		"createdAt": "2026-03-08T15:22:59.687Z",
		"updatedAt": "2026-03-08T20:06:05.278Z"
	}
}	
}
```

### Csapat törlése

* /api/teams/4 DELETE


## member

| Végpont | Metódus | Auth | CRUD | Leírás |
| - | - | - | - | - |
| /customers | GET | igen | read | Csapattag lekérése
| /customers | POST | igen | create | Csapattag létrehozása
| /customers/:id | PUT | igen | update | Csapattag módosítása
| /customers/:id | DELETE | igen | delete | Csapattag törlése

### Csapattagok lekérdezése

* /api/members/ GET

### Vásárló létrehozás

* /api/members/ POST

```JSON
    {
  "teamId": 8,
  "fullName": "Nagy Béla",
  "position": "csatár"

}
```

### Csapattag módosítása

* /api/membmers/3 PUT

```JSON
    {
	"success": true,
	"data": {
		"id": 1,
		"teamId": 1,
		"fullName": "Szoboszlai Dominik",
		"position": "pályás",
		"createdAt": "2026-03-07T20:41:12.681Z",
		"updatedAt": "2026-03-08T20:12:26.773Z"
	}
```

### Csapattag törlése

* /api/members/3 DELETE
