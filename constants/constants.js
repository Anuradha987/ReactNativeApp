const screens = {
    // main_layout: "MainLayout",
    // home: "Home",
    // search: "Search",
    // cart: "Cart",
    // favourite: "Favourite",
    // notification: "Notification",
    
    //change the header name from here. lol
    DB_MainLayout   : 'Dashboard MainLayout',

    S_MainLayout    : 'Services  MainLayout' ,
    S_Search        : 'Explore  Services' ,
    S_Sent          : 'Sent  Services' ,
    S_My            : 'My  Services' ,
    S_Approvals     : 'Approved  Services' ,
    S_Requests      : 'Service  Requests' , 

    I_MainLayout    : 'Items  MainLayout' ,
    I_Search        : 'Explore  Items' ,
    I_Sent          : 'Sent  Orders' , 
    I_My            : 'My  Items' ,
    I_SalesHistory      : 'Sales History' , 

    Fav_MainLayout  : 'Favourite MainLayout',
    MT_MainLayout   : 'MT_MainLayout'
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
        label: screens.I_SalesHistory,
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


export default {
    screens,
    S_bottom_tabs,
    I_bottom_tabs,
    ratings,
}