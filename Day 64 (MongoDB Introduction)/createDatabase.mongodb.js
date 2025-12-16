// Switch to employee database
use('employee');

// Create employees collection with dummy data including images
db.getCollection('employees').insertMany([
  {
    'employee_id': 1001,
    'first_name': 'John',
    'last_name': 'Smith',
    'email': 'john.smith@company.com',
    'phone': '+1-555-0101',
    'department': 'Engineering',
    'position': 'Senior Software Engineer',
    'salary': 95000,
    'hire_date': new Date('2020-03-15'),
    'image_url': 'https://randomuser.me/api/portraits/men/32.jpg',
    'address': {
      'street': '123 Main St',
      'city': 'San Francisco',
      'state': 'CA',
      'zip_code': '94105'
    },
    'skills': ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    'projects': ['E-commerce Platform', 'Mobile App'],
    'status': 'active'
  },
  {
    'employee_id': 1002,
    'first_name': 'Sarah',
    'last_name': 'Johnson',
    'email': 'sarah.johnson@company.com',
    'phone': '+1-555-0102',
    'department': 'Marketing',
    'position': 'Marketing Manager',
    'salary': 85000,
    'hire_date': new Date('2019-07-22'),
    'image_url': 'https://randomuser.me/api/portraits/women/44.jpg',
    'address': {
      'street': '456 Oak Ave',
      'city': 'New York',
      'state': 'NY',
      'zip_code': '10001'
    },
    'skills': ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
    'projects': ['Brand Campaign', 'Social Media Strategy'],
    'status': 'active'
  },
  {
    'employee_id': 1003,
    'first_name': 'Michael',
    'last_name': 'Chen',
    'email': 'michael.chen@company.com',
    'phone': '+1-555-0103',
    'department': 'Sales',
    'position': 'Sales Director',
    'salary': 110000,
    'hire_date': new Date('2018-11-10'),
    'image_url': 'https://randomuser.me/api/portraits/men/67.jpg',
    'address': {
      'street': '789 Pine Rd',
      'city': 'Chicago',
      'state': 'IL',
      'zip_code': '60601'
    },
    'skills': ['Negotiation', 'CRM', 'Business Development', 'Client Relations'],
    'projects': ['Enterprise Sales', 'Partnership Program'],
    'status': 'active'
  },
  {
    'employee_id': 1004,
    'first_name': 'Emily',
    'last_name': 'Williams',
    'email': 'emily.williams@company.com',
    'phone': '+1-555-0104',
    'department': 'HR',
    'position': 'HR Specialist',
    'salary': 65000,
    'hire_date': new Date('2021-01-30'),
    'image_url': 'https://randomuser.me/api/portraits/women/68.jpg',
    'address': {
      'street': '321 Elm St',
      'city': 'Austin',
      'state': 'TX',
      'zip_code': '73301'
    },
    'skills': ['Recruitment', 'Employee Relations', 'Training', 'Compliance'],
    'projects': ['Onboarding Program', 'Diversity Initiative'],
    'status': 'active'
  },
  {
    'employee_id': 1005,
    'first_name': 'David',
    'last_name': 'Brown',
    'email': 'david.brown@company.com',
    'phone': '+1-555-0105',
    'department': 'Engineering',
    'position': 'DevOps Engineer',
    'salary': 105000,
    'hire_date': new Date('2019-05-18'),
    'image_url': 'https://randomuser.me/api/portraits/men/92.jpg',
    'address': {
      'street': '654 Maple Dr',
      'city': 'Seattle',
      'state': 'WA',
      'zip_code': '98101'
    },
    'skills': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    'projects': ['Cloud Migration', 'Infrastructure Automation'],
    'status': 'active'
  },
  {
    'employee_id': 1006,
    'first_name': 'Lisa',
    'last_name': 'Garcia',
    'email': 'lisa.garcia@company.com',
    'phone': '+1-555-0106',
    'department': 'Finance',
    'position': 'Financial Analyst',
    'salary': 78000,
    'hire_date': new Date('2020-09-12'),
    'image_url': 'https://randomuser.me/api/portraits/women/26.jpg',
    'address': {
      'street': '987 Cedar Ln',
      'city': 'Boston',
      'state': 'MA',
      'zip_code': '02101'
    },
    'skills': ['Financial Modeling', 'Excel', 'Budgeting', 'Forecasting'],
    'projects': ['Annual Budget', 'Cost Analysis'],
    'status': 'on_leave'
  },
  {
    'employee_id': 1007,
    'first_name': 'Robert',
    'last_name': 'Taylor',
    'email': 'robert.taylor@company.com',
    'phone': '+1-555-0107',
    'department': 'Engineering',
    'position': 'Junior Developer',
    'salary': 70000,
    'hire_date': new Date('2022-03-01'),
    'image_url': 'https://randomuser.me/api/portraits/men/55.jpg',
    'address': {
      'street': '147 Birch St',
      'city': 'Denver',
      'state': 'CO',
      'zip_code': '80201'
    },
    'skills': ['Python', 'Django', 'JavaScript', 'HTML/CSS'],
    'projects': ['Internal Tools', 'Website Redesign'],
    'status': 'active'
  },
  {
    'employee_id': 1008,
    'first_name': 'Amanda',
    'last_name': 'Lee',
    'email': 'amanda.lee@company.com',
    'phone': '+1-555-0108',
    'department': 'Design',
    'position': 'UX/UI Designer',
    'salary': 82000,
    'hire_date': new Date('2021-08-15'),
    'image_url': 'https://randomuser.me/api/portraits/women/33.jpg',
    'address': {
      'street': '258 Walnut Ave',
      'city': 'Portland',
      'state': 'OR',
      'zip_code': '97201'
    },
    'skills': ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
    'projects': ['Mobile App Design', 'Design System'],
    'status': 'active'
  },
  {
    'employee_id': 1009,
    'first_name': 'Thomas',
    'last_name': 'Wilson',
    'email': 'thomas.wilson@company.com',
    'phone': '+1-555-0109',
    'department': 'Sales',
    'position': 'Account Executive',
    'salary': 75000,
    'hire_date': new Date('2022-01-10'),
    'image_url': 'https://randomuser.me/api/portraits/men/75.jpg',
    'address': {
      'street': '369 Spruce Way',
      'city': 'Atlanta',
      'state': 'GA',
      'zip_code': '30301'
    },
    'skills': ['Salesforce', 'Cold Calling', 'Client Presentation', 'Pipeline Management'],
    'projects': ['SMB Accounts', 'New Market Expansion'],
    'status': 'active'
  },
  {
    'employee_id': 1010,
    'first_name': 'Jennifer',
    'last_name': 'Martinez',
    'email': 'jennifer.martinez@company.com',
    'phone': '+1-555-0110',
    'department': 'Operations',
    'position': 'Operations Manager',
    'salary': 90000,
    'hire_date': new Date('2017-06-05'),
    'image_url': 'https://randomuser.me/api/portraits/women/50.jpg',
    'address': {
      'street': '741 Cherry Blvd',
      'city': 'Miami',
      'state': 'FL',
      'zip_code': '33101'
    },
    'skills': ['Process Optimization', 'Supply Chain', 'Project Management', 'Lean Six Sigma'],
    'projects': ['Warehouse Automation', 'Vendor Management'],
    'status': 'active'
  }
]);

console.log("Database is created!")