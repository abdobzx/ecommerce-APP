
# Customer Order Management System

This project is a **Spring Boot backend** application for managing customers, their orders, and products. It provides REST APIs and is integrated with a front-end user interface to display data related to customers, orders, and products.

---

## Features

- **Customer Management**:
  - List all customers with their details.
  - View orders related to a specific customer.

- **Order Management**:
  - Display all orders with their details, including dates and customer IDs.
  - Show detailed information about each order, including associated product details.

- **Product Management**:
  - List all available products with prices and quantities.

---

## Technologies Used

- **Backend**: Spring Boot (Java)
- **Database**: H2 Database (in-memory) / MySQL (for production)
- **Frontend**: Angular
- **Others**:
  - JPA/Hibernate for database operations.
  - RESTful APIs for communication between the backend and the frontend.

---

## Installation and Setup

### Prerequisites

1. **Java**: JDK 11 or later.
2. **Maven**: For dependency management.
3. **Database**: H2 or MySQL.
4. **Angular CLI** (for the front end, if needed).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/abdobzx/ecommerce-APP
   ```

2. Navigate to the project directory:
   ```bash
   cd Activites3-jee-2024
   ```

3. Build the project:
   ```bash
   mvn clean install
   ```

4. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

5. Access the application:
   - Angular Frontend: `http://localhost:4200` (if running locally).

---

## API Endpoints

### Customers
- `GET /customers` - Fetch all customers.
- `GET /customers/{id}` - Fetch details of a specific customer.

### Orders
- `GET /orders` - Fetch all orders.
- `GET /orders/{id}` - Fetch details of a specific order.

### Products
- `GET /products` - Fetch all products.

---

## Example Usage

### Fetch All Customers

```json
GET /customers
[
  {
    "id": 1,
    "name": "mohamed",
    "email": "mohamed@emsi.ma"
  },
  {
    "id": 2,
    "name": "otman",
    "email": "otman@emsi.ma"
  }
]
```

### Fetch Order Details for Customer 1

```json
GET /orders/1
{
  "id": 1,
  "date": "03/01/2025",
  "customerId": 1,
  "products": [
    {
      "productId": 1,
      "name": "Computer",
      "quantity": 36,
      "price": 900,
      "discount": 0.679,
      "amount": 10413.109
    }
  ]
}
```

---

## Future Improvements

- Add authentication and authorization.
- Enhance the UI for better user experience.
- Optimize the backend performance for large datasets.
- Implement additional testing and CI/CD pipelines.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Let me know if you need further customization!
