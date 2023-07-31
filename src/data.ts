export const menu = [
    {
        id : 1,
        title : "Main",
        listItems: [
            {
                id : 1,
                title : "HomePage",
                url : '/',
                icon : "home.svg"
            },
            {
                id : 2,
                title : "Profile",
                url : '/users/1',
                icon : "user.svg"
            },
        ],
    },
    {
        id : 2,
        title : "Lists",
        listItems: [
            {
                id : 1,
                title : "Users",
                url : '/users',
                icon : "user.svg"
            },
            {
                id : 2,
                title : "Products",
                url : '/products',
                icon : "product.svg"
            },
            {
                id : 3,
                title : "Orders",
                url : '/orders',
                icon : "order.svg"
            },
            {
                id : 4,
                title : "Posts",
                url : '/posts',
                icon : "post2.svg"
            },
        ],
    },

    {
        id : 3,
        title : "general",
        listItems: [
            {
                id : 1,
                title : "Elements",
                url : '/',
                icon : "element.svg"
            },
            {
                id : 2,
                title : "Notes",
                url : '/',
                icon : "note.svg"
            },
            {
                id : 3,
                title : "Forms",
                url : '/',
                icon : "form.svg"
            },
            {
                id : 4,
                title : "Calendar",
                url : '/',
                icon : "calendar.svg"
            },
        ],
    },

    {
        id : 4,
        title : "Maintanence",
        listItems: [
            {
                id : 1,
                title : "Settings",
                url : '/',
                icon : "settings.svg"
            },
            {
                id : 2,
                title : "Backup",
                url : '/',
                icon : "backup.svg"
            },
            
        ],
    },

    {
        id : 4,
        title : "analytics",
        listItems: [
            {
                id : 1,
                title : "charts",
                url : '/',
                icon : "chart.svg"
            },
            {
                id : 2,
                title : "Logs",
                url : '/',
                icon : "log.svg"
            },
            
        ],
    },
]





// topdeal entries




export const topDealUsers = [
    {
      id: 1,
      img: 'https://i.pravatar.cc/150?img=1',
      username: 'JohnDoe',
      email: 'john.doe@example.com',
      amount: 120.50,
    },
    {
      id: 2,
      img: 'https://i.pravatar.cc/150?img=2',
      username: 'JaneSmith',
      email: 'jane.smith@example.com',
      amount: 99.99,
    },
    {
      id: 3,
      img: 'https://i.pravatar.cc/150?img=3',
      username: 'MikeJohnson',
      email: 'mike.johnson@example.com',
      amount: 75.00,
    },
    {
      id: 4,
      img: 'https://i.pravatar.cc/150?img=4',
      username: 'EmilyBrown',
      email: 'emily.brown@example.com',
      amount: 150.20,
    },
    {
      id: 5,
      img: 'https://i.pravatar.cc/150?img=5',
      username: 'DavidLee',
      email: 'david.lee@example.com',
      amount: 200.00,
    },
    {
      id: 6,
      img: 'https://i.pravatar.cc/150?img=6',
      username: 'SarahMiller',
      email: 'sarah.miller@example.com',
      amount: 80.75,
    },
    {
        id: 5,
        img: 'https://i.pravatar.cc/150?img=5',
        username: 'DavidLee',
        email: 'david.lee@example.com',
        amount: 200.00,
      },
  ];
  





//   chartbox data


export const chartBoxUser = {
    color : "#8884d8",
    icon: "userIcon.svg",
    title:"Total users",
    number: "11.345",
    dataKey: "users",
    percentage: 45,
    chartData : [
        { name: "sun", users: 400 },
        { name: "mon", users: 350 },
        { name: "tue", users: 300 },
        { name: "wed", users: 320 },
        { name: "thu", users: 410 },
        { name: "fri", users: 380 },
        { name: "sat", users: 420 },
      ]
      
}

export const chartBoxProduct = {
    color : "skyblue",
    icon: "productIcon.svg",
    title:"Total Products",
    number: "11.345",
    dataKey: "products",
    percentage: 15,
    chartData : [
        { name: "sun", products: 400 },
        { name: "mon", products: 111 },
        { name: "tue", products: 300 },
        { name: "wed", products: 354 },
        { name: "thu", products: 410 },
        { name: "fri", products: 786 },
        { name: "sat", products: 420 },
      ]
      
}

export const chartBoxRevenue = {
    color : "teal",
    icon: "revenueIcon.svg",
    title:"Total Revenue",
    number: "11.345",
    dataKey: "revenue",
    percentage: 45,
    chartData : [
        
        { name: "sun", revenue: 111 },
        { name: "mon", revenue: 676 },
        { name: "tue", revenue: 300 },
        { name: "wed", revenue: 432 },
        { name: "thu", revenue: 410 },
        { name: "fri", revenue: 967 },
        { name: "sat", revenue: 420 },
      ]
      
}

export const chartBoxConversion = {
    color : "gold",
    icon: "conversionIcon.svg",
    title:"Total Ratio",
    number: "11.345",
    dataKey: "ratio",
    percentage: -15,
    chartData : [
        { name: "sun", ratio: 400 },
        { name: "mon", ratio: 350 },
        { name: "tue", ratio: 300 },
        { name: "wed", ratio: 320 },
        { name: "thu", ratio: 410 },
        { name: "fri", ratio: 380 },
        { name: "sat", ratio: 420 },
      ]
      
}



// barchart data

export const barChartBoxVisit = {
    title : 'Total Visit',
    color : '#FF8042',
    dataKey: 'visit',
    chartData: [
        { name: 'monday', visit: 4000 },
        { name: 'tuesday', visit: 3432 },
        { name: 'wednesday', visit: 6464 },
        { name: 'thursday', visit: 2453 },
        { name: 'friday', visit: 6576 },
        { name: 'saturday', visit: 2354 },
        { name: 'sunday', visit: 1244 },
    ]
}

export const barChartBoxRevenue = {
    title : 'Total Revenue',
    color : '#7C73C0',
    dataKey: 'revenue',
    chartData: [
        { name: 'monday', revenue: 1443 },
        { name: 'tuesday', revenue: 7456 },
        { name: 'wednesday', revenue: 4365 },
        { name: 'thursday', revenue: 2344 },
        { name: 'friday', revenue: 4664 },
        { name: 'saturday', revenue: 6767 },
        { name: 'sunday', revenue: 4000 },
    ]
}



// piechart data

export const pieData = [
   {
       name: 'Consoles',
       sales: 700,
       color: '#FBEEAC',
   },
   {
       name: 'Mobiles',
       sales: 300,
       color: '#F4D160',
   },
   {
       name: 'Laptops',
       sales: 500,
       color: '#75C2F6',
   },
   {
       name: 'Tablets',
       sales: 600,
       color: '#1D5D9B',
   },
]



// line chart data


export const UserData = [
    {
      name: 'Jan',
      "Active User": 4000,
      sales: 2400,
      revenue : 4674
      
    },
    {
      name: 'Feb',
      "Active User": 3000,
      sales: 1398,
      revenue : 8759
      
    },
    {
      name: 'Mar',
      "Active User": 2000,
      sales: 9800,
      revenue : 4957,
    },
    {
      name: 'May',
      "Active User": 2780,
      sales: 3908,
      revenue : 4649,
    },
    {
      name: 'Jun',
      "Active User": 1890,
      sales: 4800,
      revenue : 6490
    },
    {
      name: 'July',
      "Active User": 2390,
      sales: 3800,
      revenue : 4793,
    },
    {
      name: 'Aug',
      "Active User": 3490,
      sales: 300,
      revenue : 1254,
    },
    {
      name: 'Sep',
      "Active User": 6790,
      sales: 430,
      revenue : 9346,
    },
    {
      name: 'Oct',
      "Active User": 1290,
      sales: 400,
      revenue : 4387,
    },
    {
      name: 'Nov',
      "Active User": 7690,
      sales: 4300,
      revenue : 4674,
    },
    {
      name: 'Dec',
      "Active User": 3490,
      sales: 300,
      revenue : 4696,
    },
  
    
  ];



  export const  userRows = [
    { id: 1, lastName: 'Snow',  firstName: 'Jon', age: 35, email: 'jon.snow@example.com', job: 'Lord Commander' ,img: 'https://i.pravatar.cc/150?img=1', status: 'true' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com', job: 'Queen', img: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jaime.lannister@example.com', job: 'Knight', img: 'https://i.pravatar.cc/150?img=3', status: 'true'},
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya.stark@example.com', job: 'Assassin', img: 'https://i.pravatar.cc/150?img=4', status: 'true' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 56, email: 'daenerys.targaryen@example.com', job: 'Queen', img: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 50, email: 'melisandre@example.com', job: 'Red Priestess', img: 'https://i.pravatar.cc/150?img=6' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'ferrara.clifford@example.com', job: 'Merchant', img: 'https://i.pravatar.cc/150?img=7' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'rossini.frances@example.com', job: 'Composer', img: 'https://i.pravatar.cc/150?img=8' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'harvey.roxie@example.com', job: 'Lawyer', img: 'https://i.pravatar.cc/150?img=9' , status: 'true'},
    { id: 10, lastName: 'Smith', firstName: 'John', age: 28, email: 'john.smith@example.com', job: 'Software Engineer', img: 'https://i.pravatar.cc/150?img=10' },
    { id: 11, lastName: 'Johnson', firstName: 'Emily', age: 39, email: 'emily.johnson@example.com', job: 'Marketing Manager', img: 'https://i.pravatar.cc/150?img=11', status: 'true' },
    { id: 12, lastName: 'Brown', firstName: 'Michael', age: 31, email: 'michael.brown@example.com', job: 'Sales Representative', img: 'https://i.pravatar.cc/150?img=12' , status: 'true'},
    { id: 13, lastName: 'Davis', firstName: 'Emma', age: 22, email: 'emma.davis@example.com', job: 'Graphic Designer', img: 'https://i.pravatar.cc/150?img=13' },
    { id: 14, lastName: 'Garcia', firstName: 'Alex', age: 47, email: 'alex.garcia@example.com', job: 'Financial Analyst', img: 'https://i.pravatar.cc/150?img=14' , status: 'true'},
  ];




  // product data

  export const productRows = [
    { id: 1, img: 'https://www.amazon.com/dp/B0758X682F', productName: 'Product 1', quantity: 10, price: 50.99 },
    { id: 2, img: 'https://www.amazon.com/dp/B07765422M', productName: 'Product 2', quantity: 5, price: 23.45 },
    { id: 3, img: 'https://www.amazon.com/dp/B0793WW55T', productName: 'Product 3', quantity: 20, price: 37.88 },
    { id: 4, img: 'https://www.amazon.com/dp/B07995747G', productName: 'Product 4', quantity: 15, price: 15.75 },
    { id: 5, img: 'https://www.amazon.com/dp/B077777J4W', productName: 'Product 5', quantity: 8, price: 99.99 },
    { id: 6, img: 'https://www.amazon.com/dp/B078H41Z4D', productName: 'Product 6', quantity: 12, price: 65.50 },
    { id: 7, img: 'https://www.amazon.com/dp/B076121RHG', productName: 'Product 7', quantity: 25, price: 120.00 },
    { id: 8, img: 'https://www.amazon.com/dp/B07GGR1781', productName: 'Product 8', quantity: 30, price: 18.95 },
    { id: 9, img: 'https://www.amazon.com/dp/B0757Z2H32', productName: 'Product 9', quantity: 3, price: 45.25 },
    { id: 10, img: 'https://www.amazon.com/dp/B07F73Y528', productName: 'Product 10', quantity: 18, price: 88.75 },
    { id: 11, img: 'https://www.amazon.com/dp/B0779989K8', productName: 'Product 11', quantity: 7, price: 65.99 },
    { id: 12, img: 'https://www.amazon.com/dp/B077S5963F', productName: 'Product 12', quantity: 22, price: 49.50 },
    { id: 13, img: 'https://www.amazon.com/dp/B076955B5P', productName: 'Product 13', quantity: 14, price: 75.00 },
    { id: 14, img: 'https://www.amazon.com/dp/B07728657Z', productName: 'Product 14', quantity: 9, price: 32.25 },
    { id: 15, img: 'https://www.amazon.com/dp/B07F892Y6T', productName: 'Product 15', quantity: 11, price: 27.99 },
    { id: 16, img: 'https://www.amazon.com/dp/B07767117Q', productName: 'Product 16', quantity: 6, price: 54.50 },
  

  ]
  