# Project Management System

## Table of Contents
- [Description](#description)
- [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Scope of Functionalities](#scope-of-functionalities)
- [Examples of Use](#examples-of-use)
- [Project Status](#project-status)
- [Sources](#sources)

## Description

The **Project Management System** is a web-based application that helps manage projects by storing, updating, and retrieving project data from a **College Database (COLLEGE-DB)** using the **JsonPowerDB (JPDB)** API. This system is designed to allow easy data management for project-related details including project ID, name, assigned personnel, assignment date, and deadlines. The app provides a user-friendly interface for adding, updating, and resetting project records.

### Key Features:
- **Add Projects**: Users can create new projects by entering details such as **Project ID**, **Project Name**, **Assigned To**, **Assignment Date**, and **Deadline**.
- **Modify Projects**: Existing project data can be updated.
- **Reset Form**: Users can reset the form fields after entering or modifying data.

The application interacts with the database using **JSON** requests to store and retrieve data seamlessly.

## Benefits of Using JsonPowerDB

JsonPowerDB (JPDB) is a powerful, flexible, and fast NoSQL database with the following benefits:

1. **Fast JSON Processing**: JPDB is optimized for processing JSON data, making it quick and efficient for handling large volumes of data in real time.
2. **RESTful API**: JPDB provides a RESTful API that allows easy integration with any web or mobile application.
3. **Schema-less**: JPDB does not require a predefined schema, making it flexible for adding new attributes or changing the structure of data as needed.
4. **Low Latency**: With its built-in support for JSON data manipulation, JPDB offers low latency responses, ideal for real-time applications like the Project Management System.
5. **Easy to Use**: Its simple API and JSON-based queries make it a developer-friendly option for creating efficient database-driven applications.

## Scope of Functionalities

This system allows users to:
- **Create a New Project**: Enter a unique project ID and corresponding details.
- **Modify an Existing Project**: Retrieve and update the details of an existing project by its ID.
- **Reset the Form**: Clears the form fields and prepares the system for new data entry.
  
The system is connected to the **COLLEGE-DB** database and utilizes **JsonPowerDB** as the backend API for storing and retrieving project data.

## Examples of Use

1. **Adding a Project**:
   - Enter a unique **Project ID** (e.g., P12345).
   - Fill in the **Project Name**, **Assigned To**, **Assignment Date**, and **Deadline** fields.
   - Press the **Save** button to store the project data.

2. **Modifying a Project**:
   - Enter an existing **Project ID**.
   - If the project exists, the details will auto-populate.
   - Modify the necessary fields and press **Change** to update the project data.

3. **Resetting the Form**:
   - Press the **Reset** button to clear all fields and prepare for the next data entry.

## Project Status

- **Current Status**: Active development. The current version supports basic CRUD operations (Create, Read, Update, Delete) for managing project data.
- **Future Enhancements**: Planned additions include user authentication, project status tracking, and advanced error handling.

## Technology used

- **JsonPowerDB**
- **Bootstrap**
- **jQuery**
- **HTML AND CSS**
- **Javascript**
