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



// line chart


export const UserData = [
    {
      name: 'Jan',
      "Active User": 4000,
      sales: 2400,
      
    },
    {
      name: 'Feb',
      "Active User": 3000,
      sales: 1398,
      
    },
    {
      name: 'Mar',
      "Active User": 2000,
      sales: 9800,
    },
    {
      name: 'May',
      "Active User": 2780,
      sales: 3908,
    },
    {
      name: 'Jun',
      "Active User": 1890,
      sales: 4800,
    },
    {
      name: 'July',
      "Active User": 2390,
      sales: 3800,
    },
    {
      name: 'Aug',
      "Active User": 3490,
      sales: 300,
    },
    {
      name: 'Sep',
      "Active User": 6790,
      sales: 430,
    },
    {
      name: 'Oct',
      "Active User": 1290,
      sales: 400,
    },
    {
      name: 'Nov',
      "Active User": 7690,
      sales: 4300,
    },
    {
      name: 'Dec',
      "Active User": 3490,
      sales: 300,
    },
  
    
  ];