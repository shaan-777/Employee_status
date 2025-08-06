export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  tasksCompleted: number;
  tasksInProgress: number;
  tasksPending: number;
  totalTasks: number;
  completionRate: number;
  avatar: string;
  lastActivity: string;
  status: 'active' | 'away' | 'offline';
}

export const employeeData: Employee[] = [
  // CEO & Leadership
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'CEO',
    department: 'Executive',
    tasksCompleted: 45,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 50,
    completionRate: 90,
    avatar: 'RK',
    lastActivity: '2 hours ago',
    status: 'active'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Co-founder',
    department: 'Executive',
    tasksCompleted: 38,
    tasksInProgress: 4,
    tasksPending: 3,
    totalTasks: 45,
    completionRate: 84,
    avatar: 'PS',
    lastActivity: '1 hour ago',
    status: 'active'
  },

  // HR Department
  {
    id: '3',
    name: 'Anita Singh',
    role: 'HR Director',
    department: 'Human Resources',
    tasksCompleted: 52,
    tasksInProgress: 6,
    tasksPending: 4,
    totalTasks: 62,
    completionRate: 84,
    avatar: 'AS',
    lastActivity: '30 minutes ago',
    status: 'active'
  },
  {
    id: '4',
    name: 'Vikram Joshi',
    role: 'HR Manager',
    department: 'Human Resources',
    tasksCompleted: 34,
    tasksInProgress: 5,
    tasksPending: 3,
    totalTasks: 42,
    completionRate: 81,
    avatar: 'VJ',
    lastActivity: '1 hour ago',
    status: 'active'
  },
  {
    id: '5',
    name: 'Neha Gupta',
    role: 'HR Executive',
    department: 'Human Resources',
    tasksCompleted: 28,
    tasksInProgress: 4,
    tasksPending: 2,
    totalTasks: 34,
    completionRate: 82,
    avatar: 'NG',
    lastActivity: '45 minutes ago',
    status: 'active'
  },

  // Team Leads & Captains
  {
    id: '6',
    name: 'Amit Patel',
    role: 'Team Captain',
    department: 'Engineering',
    tasksCompleted: 67,
    tasksInProgress: 8,
    tasksPending: 5,
    totalTasks: 80,
    completionRate: 84,
    avatar: 'AP',
    lastActivity: '20 minutes ago',
    status: 'active'
  },
  {
    id: '7',
    name: 'Sonal Mehta',
    role: 'Team Lead',
    department: 'Design',
    tasksCompleted: 43,
    tasksInProgress: 6,
    tasksPending: 3,
    totalTasks: 52,
    completionRate: 83,
    avatar: 'SM',
    lastActivity: '15 minutes ago',
    status: 'active'
  },
  {
    id: '8',
    name: 'Rohit Verma',
    role: 'Team Lead',
    department: 'Marketing',
    tasksCompleted: 39,
    tasksInProgress: 7,
    tasksPending: 4,
    totalTasks: 50,
    completionRate: 78,
    avatar: 'RV',
    lastActivity: '1 hour ago',
    status: 'away'
  },
  {
    id: '9',
    name: 'Kavya Reddy',
    role: 'Vice Captain',
    department: 'Engineering',
    tasksCompleted: 56,
    tasksInProgress: 7,
    tasksPending: 3,
    totalTasks: 66,
    completionRate: 85,
    avatar: 'KR',
    lastActivity: '25 minutes ago',
    status: 'active'
  },
  {
    id: '10',
    name: 'Deepak Agarwal',
    role: 'Vice Captain',
    department: 'Sales',
    tasksCompleted: 41,
    tasksInProgress: 5,
    tasksPending: 4,
    totalTasks: 50,
    completionRate: 82,
    avatar: 'DA',
    lastActivity: '40 minutes ago',
    status: 'active'
  },

  // Engineering Team
  {
    id: '11',
    name: 'Arjun Malhotra',
    role: 'Senior Developer',
    department: 'Engineering',
    tasksCompleted: 48,
    tasksInProgress: 6,
    tasksPending: 2,
    totalTasks: 56,
    completionRate: 86,
    avatar: 'AM',
    lastActivity: '10 minutes ago',
    status: 'active'
  },
  {
    id: '12',
    name: 'Pooja Iyer',
    role: 'Frontend Developer',
    department: 'Engineering',
    tasksCompleted: 35,
    tasksInProgress: 4,
    tasksPending: 3,
    totalTasks: 42,
    completionRate: 83,
    avatar: 'PI',
    lastActivity: '5 minutes ago',
    status: 'active'
  },
  {
    id: '13',
    name: 'Karan Singh',
    role: 'Backend Developer',
    department: 'Engineering',
    tasksCompleted: 42,
    tasksInProgress: 5,
    tasksPending: 2,
    totalTasks: 49,
    completionRate: 86,
    avatar: 'KS',
    lastActivity: '30 minutes ago',
    status: 'active'
  },
  {
    id: '14',
    name: 'Shreya Jain',
    role: 'Full Stack Developer',
    department: 'Engineering',
    tasksCompleted: 38,
    tasksInProgress: 5,
    tasksPending: 4,
    totalTasks: 47,
    completionRate: 81,
    avatar: 'SJ',
    lastActivity: '1 hour ago',
    status: 'away'
  },
  {
    id: '15',
    name: 'Rahul Khanna',
    role: 'DevOps Engineer',
    department: 'Engineering',
    tasksCompleted: 32,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 37,
    completionRate: 86,
    avatar: 'RK',
    lastActivity: '2 hours ago',
    status: 'active'
  },

  // Design Team
  {
    id: '16',
    name: 'Riya Bansal',
    role: 'UI/UX Designer',
    department: 'Design',
    tasksCompleted: 29,
    tasksInProgress: 4,
    tasksPending: 2,
    totalTasks: 35,
    completionRate: 83,
    avatar: 'RB',
    lastActivity: '15 minutes ago',
    status: 'active'
  },
  {
    id: '17',
    name: 'Akash Tiwari',
    role: 'Graphic Designer',
    department: 'Design',
    tasksCompleted: 31,
    tasksInProgress: 3,
    tasksPending: 3,
    totalTasks: 37,
    completionRate: 84,
    avatar: 'AT',
    lastActivity: '45 minutes ago',
    status: 'active'
  },
  {
    id: '18',
    name: 'Meera Nair',
    role: 'Product Designer',
    department: 'Design',
    tasksCompleted: 26,
    tasksInProgress: 4,
    tasksPending: 2,
    totalTasks: 32,
    completionRate: 81,
    avatar: 'MN',
    lastActivity: '20 minutes ago',
    status: 'active'
  },

  // Marketing Team
  {
    id: '19',
    name: 'Vishal Chopra',
    role: 'Digital Marketing Manager',
    department: 'Marketing',
    tasksCompleted: 44,
    tasksInProgress: 6,
    tasksPending: 3,
    totalTasks: 53,
    completionRate: 83,
    avatar: 'VC',
    lastActivity: '35 minutes ago',
    status: 'active'
  },
  {
    id: '20',
    name: 'Pallavi Shah',
    role: 'Content Writer',
    department: 'Marketing',
    tasksCompleted: 37,
    tasksInProgress: 4,
    tasksPending: 2,
    totalTasks: 43,
    completionRate: 86,
    avatar: 'PS',
    lastActivity: '50 minutes ago',
    status: 'active'
  },
  {
    id: '21',
    name: 'Suresh Kumar',
    role: 'SEO Specialist',
    department: 'Marketing',
    tasksCompleted: 33,
    tasksInProgress: 3,
    tasksPending: 4,
    totalTasks: 40,
    completionRate: 83,
    avatar: 'SK',
    lastActivity: '1 hour ago',
    status: 'away'
  },

  // Sales Team
  {
    id: '22',
    name: 'Manish Dubey',
    role: 'Sales Manager',
    department: 'Sales',
    tasksCompleted: 47,
    tasksInProgress: 5,
    tasksPending: 3,
    totalTasks: 55,
    completionRate: 85,
    avatar: 'MD',
    lastActivity: '25 minutes ago',
    status: 'active'
  },
  {
    id: '23',
    name: 'Sunita Rao',
    role: 'Sales Executive',
    department: 'Sales',
    tasksCompleted: 41,
    tasksInProgress: 4,
    tasksPending: 5,
    totalTasks: 50,
    completionRate: 82,
    avatar: 'SR',
    lastActivity: '40 minutes ago',
    status: 'active'
  },
  {
    id: '24',
    name: 'Abhishek Goyal',
    role: 'Business Development',
    department: 'Sales',
    tasksCompleted: 35,
    tasksInProgress: 6,
    tasksPending: 4,
    totalTasks: 45,
    completionRate: 78,
    avatar: 'AG',
    lastActivity: '1.5 hours ago',
    status: 'away'
  },

  // Finance Team
  {
    id: '25',
    name: 'Rakesh Bharti',
    role: 'Finance Manager',
    department: 'Finance',
    tasksCompleted: 39,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 44,
    completionRate: 89,
    avatar: 'RB',
    lastActivity: '2 hours ago',
    status: 'active'
  },
  {
    id: '26',
    name: 'Divya Saxena',
    role: 'Accountant',
    department: 'Finance',
    tasksCompleted: 31,
    tasksInProgress: 2,
    tasksPending: 3,
    totalTasks: 36,
    completionRate: 86,
    avatar: 'DS',
    lastActivity: '3 hours ago',
    status: 'offline'
  },

  // Operations Team
  {
    id: '27',
    name: 'Sameer Ali',
    role: 'Operations Manager',
    department: 'Operations',
    tasksCompleted: 43,
    tasksInProgress: 5,
    tasksPending: 2,
    totalTasks: 50,
    completionRate: 86,
    avatar: 'SA',
    lastActivity: '1 hour ago',
    status: 'active'
  },
  {
    id: '28',
    name: 'Geeta Kumari',
    role: 'Operations Executive',
    department: 'Operations',
    tasksCompleted: 28,
    tasksInProgress: 4,
    tasksPending: 3,
    totalTasks: 35,
    completionRate: 80,
    avatar: 'GK',
    lastActivity: '2 hours ago',
    status: 'away'
  },

  // Interns
  {
    id: '29',
    name: 'Aditya Sharma',
    role: 'Intern',
    department: 'Engineering',
    tasksCompleted: 18,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 23,
    completionRate: 78,
    avatar: 'AS',
    lastActivity: '30 minutes ago',
    status: 'active'
  },
  {
    id: '30',
    name: 'Simran Kaur',
    role: 'Intern',
    department: 'Design',
    tasksCompleted: 15,
    tasksInProgress: 4,
    tasksPending: 1,
    totalTasks: 20,
    completionRate: 75,
    avatar: 'SK',
    lastActivity: '45 minutes ago',
    status: 'active'
  },
  {
    id: '31',
    name: 'Harsh Agrawal',
    role: 'Intern',
    department: 'Marketing',
    tasksCompleted: 12,
    tasksInProgress: 2,
    tasksPending: 3,
    totalTasks: 17,
    completionRate: 71,
    avatar: 'HA',
    lastActivity: '1 hour ago',
    status: 'active'
  },
  {
    id: '32',
    name: 'Nisha Pandey',
    role: 'Intern',
    department: 'Sales',
    tasksCompleted: 14,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 19,
    completionRate: 74,
    avatar: 'NP',
    lastActivity: '2 hours ago',
    status: 'away'
  },
  {
    id: '33',
    name: 'Yash Mittal',
    role: 'Intern',
    department: 'HR',
    tasksCompleted: 11,
    tasksInProgress: 2,
    tasksPending: 2,
    totalTasks: 15,
    completionRate: 73,
    avatar: 'YM',
    lastActivity: '1.5 hours ago',
    status: 'active'
  },
  {
    id: '34',
    name: 'Tanvi Singh',
    role: 'Intern',
    department: 'Finance',
    tasksCompleted: 13,
    tasksInProgress: 1,
    tasksPending: 1,
    totalTasks: 15,
    completionRate: 87,
    avatar: 'TS',
    lastActivity: '3 hours ago',
    status: 'offline'
  },

  // Additional Engineering Team Members
  {
    id: '35',
    name: 'Rajat Bose',
    role: 'QA Engineer',
    department: 'Engineering',
    tasksCompleted: 36,
    tasksInProgress: 4,
    tasksPending: 2,
    totalTasks: 42,
    completionRate: 86,
    avatar: 'RB',
    lastActivity: '20 minutes ago',
    status: 'active'
  },
  {
    id: '36',
    name: 'Swati Desai',
    role: 'Mobile Developer',
    department: 'Engineering',
    tasksCompleted: 29,
    tasksInProgress: 5,
    tasksPending: 3,
    totalTasks: 37,
    completionRate: 78,
    avatar: 'SD',
    lastActivity: '1 hour ago',
    status: 'active'
  },
  {
    id: '37',
    name: 'Nikhil Yadav',
    role: 'Data Scientist',
    department: 'Engineering',
    tasksCompleted: 33,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 38,
    completionRate: 87,
    avatar: 'NY',
    lastActivity: '45 minutes ago',
    status: 'active'
  },

  // Additional Marketing Team
  {
    id: '38',
    name: 'Komal Agarwal',
    role: 'Social Media Manager',
    department: 'Marketing',
    tasksCompleted: 41,
    tasksInProgress: 5,
    tasksPending: 2,
    totalTasks: 48,
    completionRate: 85,
    avatar: 'KA',
    lastActivity: '30 minutes ago',
    status: 'active'
  },
  {
    id: '39',
    name: 'Ravi Sinha',
    role: 'Marketing Analyst',
    department: 'Marketing',
    tasksCompleted: 27,
    tasksInProgress: 3,
    tasksPending: 4,
    totalTasks: 34,
    completionRate: 79,
    avatar: 'RS',
    lastActivity: '2 hours ago',
    status: 'away'
  },

  // Additional Sales Team
  {
    id: '40',
    name: 'Prateek Joshi',
    role: 'Sales Coordinator',
    department: 'Sales',
    tasksCompleted: 34,
    tasksInProgress: 4,
    tasksPending: 3,
    totalTasks: 41,
    completionRate: 83,
    avatar: 'PJ',
    lastActivity: '1 hour ago',
    status: 'active'
  },
  {
    id: '41',
    name: 'Anjali Bhatt',
    role: 'Client Relations',
    department: 'Sales',
    tasksCompleted: 38,
    tasksInProgress: 3,
    tasksPending: 4,
    totalTasks: 45,
    completionRate: 84,
    avatar: 'AB',
    lastActivity: '25 minutes ago',
    status: 'active'
  },

  // Additional Operations & Support
  {
    id: '42',
    name: 'Mohit Garg',
    role: 'IT Support',
    department: 'Operations',
    tasksCompleted: 26,
    tasksInProgress: 2,
    tasksPending: 3,
    totalTasks: 31,
    completionRate: 84,
    avatar: 'MG',
    lastActivity: '1.5 hours ago',
    status: 'active'
  },
  {
    id: '43',
    name: 'Sneha Tripathi',
    role: 'Office Manager',
    department: 'Operations',
    tasksCompleted: 22,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 27,
    completionRate: 81,
    avatar: 'ST',
    lastActivity: '3 hours ago',
    status: 'offline'
  },

  // Customer Success Team
  {
    id: '44',
    name: 'Gaurav Malhotra',
    role: 'Customer Success Manager',
    department: 'Customer Success',
    tasksCompleted: 45,
    tasksInProgress: 6,
    tasksPending: 3,
    totalTasks: 54,
    completionRate: 83,
    avatar: 'GM',
    lastActivity: '40 minutes ago',
    status: 'active'
  },
  {
    id: '45',
    name: 'Richa Agarwal',
    role: 'Support Executive',
    department: 'Customer Success',
    tasksCompleted: 32,
    tasksInProgress: 4,
    tasksPending: 2,
    totalTasks: 38,
    completionRate: 84,
    avatar: 'RA',
    lastActivity: '1 hour ago',
    status: 'active'
  },

  // Legal & Compliance
  {
    id: '46',
    name: 'Adv. Satish Kumar',
    role: 'Legal Advisor',
    department: 'Legal',
    tasksCompleted: 18,
    tasksInProgress: 2,
    tasksPending: 1,
    totalTasks: 21,
    completionRate: 86,
    avatar: 'SK',
    lastActivity: '4 hours ago',
    status: 'offline'
  },
  {
    id: '47',
    name: 'Preeti Sharma',
    role: 'Compliance Officer',
    department: 'Legal',
    tasksCompleted: 24,
    tasksInProgress: 2,
    tasksPending: 2,
    totalTasks: 28,
    completionRate: 86,
    avatar: 'PS',
    lastActivity: '2 hours ago',
    status: 'away'
  },

  // Additional Interns
  {
    id: '48',
    name: 'Arpit Bansal',
    role: 'Intern',
    department: 'Operations',
    tasksCompleted: 16,
    tasksInProgress: 2,
    tasksPending: 1,
    totalTasks: 19,
    completionRate: 84,
    avatar: 'AB',
    lastActivity: '2 hours ago',
    status: 'active'
  },
  {
    id: '49',
    name: 'Ritu Gupta',
    role: 'Intern',
    department: 'Customer Success',
    tasksCompleted: 10,
    tasksInProgress: 3,
    tasksPending: 2,
    totalTasks: 15,
    completionRate: 67,
    avatar: 'RG',
    lastActivity: '1 hour ago',
    status: 'active'
  },
  {
    id: '50',
    name: 'Varun Khanna',
    role: 'Intern',
    department: 'Legal',
    tasksCompleted: 8,
    tasksInProgress: 1,
    tasksPending: 1,
    totalTasks: 10,
    completionRate: 80,
    avatar: 'VK',
    lastActivity: '3 hours ago',
    status: 'away'
  }
];

export const getDepartmentStats = () => {
  const departments = employeeData.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = {
        name: employee.department,
        employees: 0,
        totalTasks: 0,
        completedTasks: 0,
        avgCompletionRate: 0
      };
    }
    
    acc[employee.department].employees++;
    acc[employee.department].totalTasks += employee.totalTasks;
    acc[employee.department].completedTasks += employee.tasksCompleted;
    
    return acc;
  }, {} as Record<string, any>);

  return Object.values(departments).map((dept: any) => ({
    ...dept,
    avgCompletionRate: Math.round((dept.completedTasks / dept.totalTasks) * 100)
  }));
};

export const getRoleStats = () => {
  const roles = ['CEO', 'Co-founder', 'HR Director', 'HR Manager', 'HR Executive', 'Team Captain', 'Team Lead', 'Vice Captain', 'Intern'];
  
  return roles.map(role => {
    const roleEmployees = employeeData.filter(emp => emp.role === role);
    const totalTasks = roleEmployees.reduce((sum, emp) => sum + emp.totalTasks, 0);
    const completedTasks = roleEmployees.reduce((sum, emp) => sum + emp.tasksCompleted, 0);
    
    return {
      role,
      count: roleEmployees.length,
      totalTasks,
      completedTasks,
      avgCompletionRate: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
    };
  }).filter(r => r.count > 0);
};