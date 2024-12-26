# Travel Website

## Overview

This project is a fully functional travel website developed . The website allows users to browse, book, and manage trips. Additionally, it includes functionality for trip organizers to register and add trips.

## Features

- Trip listing and details view
- Trip booking and checkout process
- User authentication (login and signup)
- Trip organizer registration and trip management
- Booking management and cancellation
- Payment handling

## Images
<img width="946" alt="t1" src="https://github.com/user-attachments/assets/c4f745bb-3b8a-4169-8380-9d9c255e47d3" />
<img width="922" alt="t2" src="https://github.com/user-attachments/assets/6cb8a801-6b91-42e0-9a3b-ae35b7db75c6" />
<img width="917" alt="t3" src="https://github.com/user-attachments/assets/1fa6eb0e-e012-4b7d-9343-99ddc754bfd4" />
<img width="948" alt="t4" src="https://github.com/user-attachments/assets/f953191a-9c7d-40f4-990f-11bbb1484226" />
<img width="933" alt="t5" src="https://github.com/user-attachments/assets/3c3ab33f-1c97-4b28-b891-0f7b7dfaec1d" />
<img width="926" alt="t6" src="https://github.com/user-attachments/assets/49fb84af-bee1-4ca6-a006-40b13150d8a5" />
<img width="944" alt="t7" src="https://github.com/user-attachments/assets/71dc709c-f905-424d-9c05-91bfdeb35d4b" />
<img width="945" alt="t8" src="https://github.com/user-attachments/assets/32b89828-b529-4dbc-ad86-aa44697d0901" />
<img width="923" alt="t9" src="https://github.com/user-attachments/assets/569a27b6-87b2-4a6b-b038-f1347dba18d4" />


## Core Functionalities

### Trip Listing and Details

  - Trip name
  - Description
  - Dates
  - Price
  - Available slots
  - Cancellation policy

### Trip Booking

- users can book our trip after login with payment method.

### Authentication

- Unauthenticated users can browse trips and view details.
- Users must log in or sign up to book a trip.

### Trip Organizer Registration

- Registered organizers can access to a dashboard to:
  - Add new trips
  - View their added trips
  - Edit or delete trips

### Booking Management and Cancellation

- Authenticated users have a section to view all their booked trips.
- cancellation functionality with the following policies:
  - Full refund if cancelled 15 days prior to the trip date.
  - 50% refund if cancelled 7 days prior.
  - No refund if cancelled less than 7 days prior.

### Website Layout

- **Landing Page**:
  - Include information about the travel company.
  - List upcoming trips with an option to view details or book trip.
- **User Dashboard**:
  - For customers to view and manage their bookings.
  - For organizers to manage their trips.

## Technical Stack

### Frontend

- React
- JavaScript
- Tailwind [for styles]

### Backend

- Node.js
- Express.js
- mongoose
- MongoDB [For Store User , Organizer , Trips and Booking data information]

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rahulkrsharma2004/travel-website.git
   cd travel-website
