# PatientCareApp

## Patient/Nurse login


### URL
`auth/patient-login`
`auth/nurse-login`

### Request
POST
```javascript
{
	email,
  	password
}
```

### Response
```javascript
{
    "_id": "5cabe65e5b14526573b6cc2b",
    "name": "Test User",
    "email": "mail@mail.com",
    "password": "password",
    "clinicalVisits": [],
    "dailyInfo": [],
    "createdAt": "2019-04-09T00:25:02.850Z",
    "updatedAt": "2019-04-09T00:25:02.850Z",
    "__v": 0
}

