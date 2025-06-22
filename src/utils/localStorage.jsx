// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Kavya",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Generate the sales report for May",
        date: "2025-06-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve the login redirect issue in production",
        date: "2025-06-13",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update client database",
        description: "Migrate old client data to new schema",
        date: "2025-06-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design UI mockups",
        description: "Create new UI design for dashboard",
        date: "2025-06-14",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write documentation",
        description: "Prepare API documentation for internal use",
        date: "2025-06-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client call",
        description: "Discuss new feature requests with client",
        date: "2025-06-12",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy update",
        description: "Deploy v2.1 to staging",
        date: "2025-06-13",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Riya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Optimize images",
        description: "Reduce website image sizes for performance",
        date: "2025-06-08",
        category: "Performance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Set up CI/CD",
        description: "Integrate GitHub Actions with deployment pipeline",
        date: "2025-06-07",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review PRs",
        description: "Check and merge pending pull requests",
        date: "2025-06-06",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Clean old logs",
        description: "Remove outdated server logs",
        date: "2025-06-05",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Aman",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Conduct training",
        description: "Train new interns on company tools",
        date: "2025-06-14",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Weekly sync-up with frontend team",
        date: "2025-06-13",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix CSS issues",
        description: "Resolve layout bugs in Safari",
        date: "2025-06-12",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Divya",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Bug triage",
        description: "Review and prioritize bug reports",
        date: "2025-06-10",
        category: "QA",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update README",
        description: "Improve clarity of project README",
        date: "2025-06-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Analytics setup",
        description: "Integrate Google Analytics into homepage",
        date: "2025-06-13",
        category: "Tracking",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Feature demo",
        description: "Prepare demo video for investors",
        date: "2025-06-12",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = 
    [
        {
            "firstName" : "Aashi",
            "id": 1,
            "email": "admin@me.com",
            "password": "123"
        }
    ]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees , admin};


}
