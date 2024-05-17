# Mini Peerfives API

Mini Peerfives allows users to reward each other with P5 points. Each user can only give a maximum of 100 P5 points. Users can view their rewards and undo transactions if needed.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB (running locally or on a cloud service like MongoDB Atlas)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/mini-peerfives.git
   cd mini-peerfives
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root of the project with the following content:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the server**:

   ```bash
   npm start
   ```

   The server will start on the port specified in the `.env` file (default is 5000).

## API Endpoints

### Create a User

_all the examples are actual and tested on postman please make sure you create a user and use your ids generated by mongodb_

**Endpoint**: `POST /api/users`
**Request Body**:

```json
{
    "name": "Person A"
}
Response:

{
    "_id": "664747bcf901e59cf7ac902c",
    "name": "Person A",
    "p5Balance": 100,
    "rewardsBalance": 0
}

**Edit a User
Endpoint: PUT /api/users/:id

Request Body:
{
    "name": "Updated Name"
}
Response:

{
    "_id": "664747bcf901e59cf7ac902c",
    "name": "Updated Name",
    "p5Balance": 100,
    "rewardsBalance": 0
}

--Give P5 Points (Create Reward)
Endpoint: POST /api/rewards

Request Body:

{
    "givenBy": "664747bcf901e59cf7ac902c",
    "givenTo": "664747e8f901e59cf7ac902e",
    "points": 50
}
Response:

{
    "_id": "transactionId",
    "givenBy": "664747bcf901e59cf7ac902c",
    "givenTo": "664747e8f901e59cf7ac902e",
    "points": 50,
    "datetime": "2024-05-17T12:07:46.621Z"
}

--Get Rewards for a User

Endpoint: GET /api/rewards/:userId

Response:
{
    "user": {
        "name": "Person B",
        "p5Balance": 50,
        "rewardsBalance": 50
    },
    "rewards": [
        {
            "_id": "66474892f901e59cf7ac9038",
            "datetime": "2024-05-17T12:00:00.000Z",
            "points": 50,
            "givenBy": {
                "_id": "664747bcf901e59cf7ac902c",
                "name": "Person A"
            },
            "givenTo": {
                "_id": "664747e8f901e59cf7ac902e",
                "name": "Person B"
            }
        }
    ]
}

--Get Transaction Details by ID

Endpoint: GET /api/rewards/transaction/:id

Response:
{
    "_id": "66474892f901e59cf7ac9038",
    "datetime": "2024-05-17T12:07:46.621Z",
    "points": 50,
    "givenBy": {
        "_id": "664747bcf901e59cf7ac902c",
        "name": "Person A",
        "p5Balance": 50
    },
    "givenTo": {
        "_id": "664747e8f901e59cf7ac902e",
        "name": "Person B",
        "rewardsBalance": 50
    }
}

--Delete a Reward (Undo Transaction)

Endpoint: DELETE /api/rewards/transaction/:id

Response:

{
    "message": "last reward deleted"
}

After Deletion:

The involved users' balances will be adjusted to their previous states before the transaction.

---------

## Completed

1. Person A gives 50 P5 points to Person B
Before transaction:

Person	P5 balance	Rewards balance
A	100	0
B	100	0
After transaction:

Person	P5 balance	Rewards balance
A	50	0
B	100	50
2. Person B gives 50 P5 points to Person A
Before transaction:

Person	P5 balance	Rewards balance
A	50	0
B	100	50
After transaction:

Person	P5 balance	Rewards balance
A	50	50
B	50	50
3. Person A gives 75 P5 points to Person B
Before transaction:

Person	P5 balance	Rewards balance
A	50	50
B	50	50
After transaction:

Not possible as Person A has 50 P5 in balance

4. Person A deletes 1st transaction of P5
Before transaction:

Person	P5 balance	Rewards balance
A	50	50
B	50	50
After transaction:

Person	P5 balance	Rewards balance
A	100	50
B	100	0

**Conclusion**
This project provides a simple way to manage and track the rewarding of P5 points between users. By following the steps in this README, you can set up the project, create users, reward points, view transactions, and undo transactions if needed.

If you have any questions or run into any issues, feel free to open an issue on the project's GitHub repository.
```
