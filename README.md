# PatientCareApp

## Patient/Nurse login

### URL

`auth/patient-login`
`auth/nurse-login`

### Request

POST

```javascript
{
  email, password
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
```

## Patient registration

### URL

`auth/patient-register`

### Request

POST

```javascript
{
  email, password, name
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
```

## Get Patients

### URL

`nurse/patient-register`

### Request

GET

### Response

```javascript
[
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
]
```

## Create Tip

### URL

`nurse/create-tip`

### Request

POST

```javascript
{
	"title": "Test Title",
	"body": "Lorem Ipsum",
	"patient_id": "5cabe65e5b14526573b6cc2b",
	"nurse_id": "5cabea81e8a0b816e5d2e91b"
}
```

### Response

```javascript
{
    "_id": "5cabef056d8e2d3ea36ed84c",
    "title": "Test Title",
    "body": "Lorem Ipsum",
    "patient_id": "5cabe65e5b14526573b6cc2b",
    "nurse_id": "5cabea81e8a0b816e5d2e91b",
    "createdAt": "2019-04-09T01:01:57.414Z",
    "updatedAt": "2019-04-09T01:01:57.414Z",
    "__v": 0
}
```