# Faculty and Students Scheduleing and Information System

The **Faculty and Students Scheduleing and Information System** is a comprehensive platform designed to streamline the scheduling and organization of lectures, sessions, and resources within a college environment. This system caters to five primary user groups—**Students**, **Professors**, **Teaching Assistants**, **IT Technicians**, and the **Scheduling Committee (Admin)**—providing tailored functionalities to enhance efficiency, transparency, and the user experience.

---

## 📚 **Project Description**

This system is developed to solve challenges in managing schedules and resources within a college. It automates the creation, modification, and maintenance of schedules, providing users with detailed information about lectures, sessions, and the facilities they require. It also ensures quick communication of changes and allows administrators to oversee and maintain college resources effectively.

---

## 💡 **Key Features**

### **1. Students**
- View weekly timetables and session schedules.
- Access detailed information about professors, teaching assistants, and academic courses.
- Know the location and timing of lectures, including labs and auditoriums.

### **2. Professors**
- Access personal schedules, including lecture timings and office hours.
- Get a detailed overview of course assignments and responsibilities.

### **3. Teaching Assistants**
- Manage and view their schedules, including section timings and assigned professors.
- Access the list of courses they assist in teaching.

### **4. IT Technicians**
- Monitor the status of devices in laboratories and lecture halls.
- Maintain detailed records of device conditions (operational, non-operational, under repair).
- Receive alerts and updates about equipment requiring attention.

### **5. Scheduling Committee (Admin)**
- Create and update schedules for lectures, sessions, labs, and sections.
- Manage changes to schedules and notify users in real-time.
- Maintain an overview of the college’s timetable and resource allocations.

---

## 🛠️ **Technology Stack**

- **Frontend:** HTML, CSS, JavaScript, React.js, Tailwind CSS
- **Backend:** C#, ASP.NET MVC Framework, LINQ, Entity Framework
- **Database:** Microsoft SQL Server
- **Design and Prototyping:** Figma
- **Development Tools:** Visual Studio

---

## 🗂️ **Database Overview**

- **Users Table:** Stores information about all users (Students, Professors, TAs, IT Technicians, Admin).
- **Courses Table:** Contains course details, including prerequisites and associated professors/TAs.
- **Schedules Table:** Holds scheduling information for lectures, sessions, labs, and sections.
- **Facilities Table:** Tracks lab and auditorium equipment, including status and maintenance records.
- **Departments Table:** Represents the college's academic departments (CS, IT, IS, MM).

### **ERD (Entity-Relationship Diagram)**
The database ensures relationships between courses, users, schedules, and facilities, providing a robust foundation for managing and retrieving data.

---

## 🌟 **Advantages**

1. **For Students:**
   - Easy access to personalized schedules.
   - Detailed insights into academic staff and resources.

2. **For Professors & TAs:**
   - Streamlined view of responsibilities and office hours.
   - Quick updates to schedules and course details.

3. **For IT Technicians:**
   - Efficient tracking and management of devices.
   - Improved planning for equipment maintenance.

4. **For Scheduling Committee:**
   - Simplified schedule creation and updates.
   - Real-time communication of changes across all user groups.

5. **For Administration:**
   - Comprehensive overview of resource usage and availability.
   - Enhanced efficiency in managing college operations.

---

## 🏫 **Motivation**

The project was inspired by the need to:
- Eliminate scheduling conflicts and improve timetable stability.
- Provide a centralized platform for accessing schedules and resources.
- Enhance the quality of education and resource management within colleges.

---

## 🚀 **How to Run**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/college-scheduling-system.git
   ```
2. Navigate to the project directory and open it in Visual Studio.
3. Configure the database connection in `appsettings.json`.
4. Run the project to start the local server.
5. Access the system in your browser at `http://localhost:3000`.

---


## 👥 **Contributors**

- **[Amr Abdo]** - DataBase & UI/UX
- **[Omar Nasr]** - Backend
- **[Ali Osama]** - Fronend
- **Dr. Naglaa** - Supervisor
- **Omnia Ahmed** - Co-Supervisor

---


## 🌐 **Links**

- [GitHub Repository](https://github.com/amrabd/Graduation-Project-Faculty-and-Students-Scheduleing-and-Information-System-FSSIS-)
- [LinkedIn](https://www.linkedin.com/in/amrabdo1102002/)
- [Notion](https://www.notion.so/Faculty-and-Students-Scheduling-Information-System-FSSIS-c2211d5b22f342bdbdd15836b4ef4094)
- [Figma Design](https://www.figma.com/design/Y8BZY7B1nkdEBTxhCOIxiA/FSSIS?node-id=0-1&node-type=canvas&t=664M6sAJcs7GVMaR-0)
- [Documentation](https://drive.google.com/file/d/1Y6V0WlLU8MUJiGIg-Dda-yQoD9jkwfb6/view?usp=drive_link) 

Feel free to contribute or raise issues to improve this system further!
