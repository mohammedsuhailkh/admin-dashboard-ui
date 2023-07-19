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
                url : '/uasers/1',
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
    dataKey: "users",
    percentage: 15,
    chartData : [
        { name: "sun", users: 400 },
        { name: "mon", users: 111 },
        { name: "tue", users: 300 },
        { name: "wed", users: 354 },
        { name: "thu", users: 410 },
        { name: "fri", users: 786 },
        { name: "sat", users: 420 },
      ]
      
}

export const chartBoxRevenue = {
    color : "teal",
    icon: "revenueIcon.svg",
    title:"Total Revenue",
    number: "11.345",
    dataKey: "users",
    percentage: 45,
    chartData : [
        
        { name: "sun", users: 111 },
        { name: "mon", users: 676 },
        { name: "tue", users: 300 },
        { name: "wed", users: 432 },
        { name: "thu", users: 410 },
        { name: "fri", users: 967 },
        { name: "sat", users: 420 },
      ]
      
}

export const chartBoxConversion = {
    color : "gold",
    icon: "conversionIcon.svg",
    title:"Total Ratio",
    number: "11.345",
    dataKey: "users",
    percentage: -15,
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