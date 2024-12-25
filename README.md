# Travel Website

## Overview

This project is a fully functional travel website developed . The website allows users to browse, book, and manage trips. Additionally, it includes functionality for trip organizers to register and add trips.

## Objective

The goal is to build a travel website with the following core functionalities:

- Trip listing and details view
- Trip booking and checkout process
- User authentication (login and signup)
- Trip organizer registration and trip management
- Booking management and cancellation
- Payment handling

## Core Functionalities

### Trip Listing and Details

- Display a list of upcoming trips on the landing page.
- Each trip should have a detailed view containing:
  - Trip name
  - Description
  - Dates
  - Price
  - Available slots
  - Cancellation policy

### Trip Booking

- Allow users to add trips to a cart.
- Implement a checkout process to confirm booking.
- Ensure that only authenticated users can book trips.

### Authentication

- Unauthenticated users can browse trips and view details.
- Users must log in or sign up to book a trip.

### Trip Organizer Registration

- Provide a registration flow for trip organizers.
- Registered organizers should have access to a dashboard to:
  - Add new trips
  - View their added trips
  - Edit or delete trips

### Booking Management and Cancellation

- Authenticated users should have a section to view all their booked trips.
- Implement cancellation functionality with the following policies:
  - Full refund if cancelled 15 days prior to the trip date.
  - 50% refund if cancelled 7 days prior.
  - No refund if cancelled less than 7 days prior.

### Payment Handling

- Implement a dummy payment system to store payment details.
- Ensure the code is modular and extensible for integrating third-party payment gateways in the future.

### Website Layout

- **Landing Page**:
  - Include information about the travel company.
  - List upcoming trips with an option to view details or add to cart.
- **User Dashboard**:
  - For customers to view and manage their bookings.
  - For organizers to manage their trips.

## Good-to-Have Features (Optional)

1. **Concurrency Handling**:
   - Ensure that simultaneous booking attempts for the last slot result in only one successful booking.
2. **Session Management**:
   - Implement login sessions that expire after a specified duration (e.g., 7 days), requiring users to log in again.
3. **Optimized Load Time**:
   - Optimize assets (images, CSS, JavaScript) and implement lazy loading for content to ensure the landing page loads quickly.

## Technical Stack

### Frontend

- JavaScript
- CSS
- React

### Backend

- Any technology of your choice (Node.js, Java, Python, etc.)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rahulkrsharma2004/travel-website.git
   cd travel-website
