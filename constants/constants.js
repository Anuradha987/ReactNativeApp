const screens = {
    // main_layout: "MainLayout",
    // home: "Home",
    // search: "Search",
    // cart: "Cart",
    // favourite: "Favourite",
    // notification: "Notification",
    
    //change the header name from here. lol
    DB_MainLayout   : 'Dashboard MainLayout',

    S_MainLayout    : 'Services MainLayout' ,
    S_Search        : 'Explore Services' ,
    S_Sent          : 'Services Sent' ,
    S_My            : 'Services My' ,
    S_Approvals     : 'Services Approvals' ,
    S_Requests      : 'Services Requests' , 

    I_MainLayout    : 'Items MainLayout' ,
    I_Search        : 'Items Search' ,
    I_Sent          : 'Items Sent' , 
    I_My            : 'Items My' ,
    I_Approvals     : 'Items Approvals' ,
    I_Requests      : 'Items Requests' , 

    B_MainLayout    : 'My Business MainLayout' , 
    B_Search        : 'Business Search',
    B_Sent          : 'Business Sent' ,
    B_My            : 'My Business My' , 
    B_ReceiveReq    : 'My Business ReceiveReq' , 
    B_SentReq       : 'My Business SentReq' ,

}


const S_bottom_tabs = [
    {
        id: 0,
        label: screens.S_Search,
    },
    {
        id: 1,
        label: screens.S_Sent,
    },
    {
        id: 2,
        label: screens.S_Requests,
    },
    {
        id: 3,
        label: screens.S_Approvals,
    },
    {
        id: 4,
        label: screens.S_My,
    },
]

const I_bottom_tabs = [
    {
        id: 0,
        label: screens.I_Search,
    },
    {
        id: 1,
        label: screens.I_Sent,
    },
    {
        id: 2,
        label: screens.I_Requests,
    },
    {
        id: 3,
        label: screens.I_Approvals,
    },
    {
        id: 4,
        label: screens.I_My,
    },
]

const B_bottom_tabs = [
    {
        id: 0,
        label: screens.B_Search,
    },
    {
        id: 1,
        label: screens.B_Sent,
    },
    {
        id: 2,
        label: screens.B_SentReq,
    },
    {
        id: 3,
        label: screens.B_ReceiveReq,
    },
    {
        id: 4,
        label: screens.B_My,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

export default {
    screens,
    S_bottom_tabs,
    I_bottom_tabs,
    B_bottom_tabs,
    delivery_time,
    ratings,
    tags
}