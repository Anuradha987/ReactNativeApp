import { icons, images } from "./";
import {Text,View,} from 'react-native';

const myProfile = {
    name: "ByProgrammers",
    profile_image: images.profile,
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Food & Drinks",
        icon: icons.burger
    },
    {
        id: 2,
        name: "Home & Gardening",
        icon: icons.cherry
    },
    {
        id: 3,
        name: "Health & Medication",
        icon: icons.rice
    },
    {
        id: 4,
        name: "Business & Finance",
        icon: icons.rice
    },
    {
        id: 5,
        name: "Sports & Fitness",
        icon: icons.rice
    },
    {
        id: 6,
        name: "Clothing & Fashion",
        icon: icons.rice
    },
    {
        id: 7,
        name: "Educational",
        icon: icons.rice
    },
    {
        id: 8,
        name: "Computing, Mobile & Technology",
        icon: icons.rice
    },
    {
        id: 9,
        name: "Electronic & Electrics",
        icon: icons.rice
    },
    // {
    //     id: 10,
    //     name: "Lifestyle",
    //     icon: icons.rice
    // },
    {
        id: 11,
        name: "Entertainment",
        icon: icons.rice
    },
    {
        id: 12,
        name: "Photography",
        icon: icons.rice
    },
    {
        id: 13,
        name: "Agricultural",
        icon: icons.rice
    },
    {
        id: 14,
        name: "Traveling & Vehicles",
        icon: icons.rice
    },
    {
        id: 15,
        name: "Kids",
        icon: icons.rice
    },
    {
        id: 16,
        name: "Environment",
        icon: icons.rice
    },
    {
        id: 17,
        name: "Law",
        icon: icons.rice
    },
    {
        id: 18,
        name: "Pets",
        icon: icons.rice
    },
    {
        id: 19,
        name: "Other",
        icon: icons.rice
    },
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]
const priorityCategory = [
    {
        id: 1,
        priority: 'high',
        color: 'red',
    },
    {
        id: 2,
        priority: 'medium', 
        color: 'yellow',
    },
    {
        id: 3,
        priority: 'low', 
        color: 'green',
    }
]



    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    var currentDate = date + '/' + month + '/' + year 
    + ' ' + hours + ':' + min + ':' + sec

const servicesRequestList =[
    {
        id: 1,
        title: 'Create a website',
        description: "i need to create a website for my university project",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '18/06/2021', 
        publisherName:"Mike Mike", 
        postedDate: "45min",
        serviceCategory: "categories", 
        priorityCategory: [1],
       // accept: 
        toMe: 'Yes', 
        approvedDate:  date+"/"+ month+"/"+ year
    },
    {
        id: 2,
        title: 'Repair the iron',
        description: "The iron is brocken. Someone please help to make it",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: "03/06/2021",
        publisherName:"Snadra Aros", 
        postedDate:"13h",
        serviceCategory: "okwd",
        priorityCategory: [3],
       // accept: 
        toMe: 'No'        
    },
    {
        id: 3,
        title: 'Need a garden chair',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '10/06/2021', 
        publisherName:"Damayanthi Wijeweera", 
        postedDate: "08/12",
        serviceCategory: "oisef", 
        priorityCategory: [2],
       // accept: 
        toMe: 'No'        
    },
    
    {
        id: 4,
        title: 'Need a garden chair',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '11/06/2021', 
        publisherName:"Akila Shrimal", 
        postedDate: '07/12',
        serviceCategory: "oiasdj", 
        priorityCategory: [1],
       // accept: 
        toMe: 'No'        
    },
    {
        id: 5,
        title: 'Need a garden chair',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '13/06/2021', 
        publisherName:"Akila Shrimal", 
        postedDate: '07/12',
        serviceCategory: "oiasdj", 
        priorityCategory: [1],
       // accept: 
        toMe: 'No'        
    },

]

const ApprovedServReq = [
    {
        //accepted date is taken as the title
    title : (currentDate.toString()),
    data: [
        {
            id: 1,
            title: 'Create a website',
            description: "i need to create a website for my university project",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '18/06/2021', 
            publisherName:"Mike Mike", 
            postedDate: "45min",
            serviceCategory: "categories", 
            priorityCategory: [1],
           // accept: 
            toMe: 'Yes', 
        },
        {
            id: 2,
            title: 'Repair the iron',
            description: "The iron is brocken. Someone please help to make it",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '10/06/2021',
            publisherName:"Snadra Aros", 
            postedDate:"13h",
            serviceCategory: "okwd",
            priorityCategory: [3],
           // accept: 
            toMe: 'No'        
        },
        {
            id: 3,
            title: 'Need a garden chair',
            description: "My house requires a garden chair to be made. if anyone can, please accept my request",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '10/06/2021', 
            publisherName:"Damayanthi Wijeweera", 
            postedDate: "08/12",
            serviceCategory: "oisef", 
            priorityCategory: [2],
        // accept: 
            toMe: 'No'      
        }, 
        {
            id: 4,
            title: 'Need a garden chair',
            description: "My house requires a garden chair to be made. if anyone can, please accept my request",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '13/06/2021', 
            publisherName:"Akila Shrimal", 
            postedDate: '07/12',
            serviceCategory: "oiasdj", 
            priorityCategory: [1],
           // accept: 
            toMe: 'No'        
        },
    ]
    },
    {
        title : '6/7/2021',
        data: [
            {
                id: 1,
                title: 'Create a website',
                description: "i need to create a website for my university project",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '07/06.2021', 
                publisherName:"Mike Mike", 
                postedDate: "45min",
                serviceCategory: "Computing & Technology", 
                priorityCategory: [1],
               // accept: 
                toMe: 'Yes', 
            },
            {
                id: 2,
                title: 'Repair the iron',
                description: "The iron is brocken. Someone please help to make it",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '10/06/2021',
                publisherName:"Snadra Aros", 
                postedDate:"13h",
                serviceCategory: "ELectronics and Electricals",
                priorityCategory: [3],
               // accept: 
                toMe: 'No'        
            },
            {
                id: 3,
                title: 'Need a garden chair',
                description: "My house requires a garden chair to be made. if anyone can, please accept my request",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '11/06/2021', 
                publisherName:"Damayanthi Wijeweera", 
                postedDate: "08/12",
                serviceCategory: "oisef", 
                priorityCategory: [2],
            // accept: 
                toMe: 'No'      
            }, 
            {
                id: 4,
                title: 'Need a garden chair',
                description: "My house requires a garden chair to be made. if anyone can, please accept my request",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '12/06/2021', 
                publisherName:"Akila Shrimal", 
                postedDate: '07/12',
                serviceCategory: "oiasdj", 
                priorityCategory: [1],
               // accept: 
                toMe: 'No'        
            },
        ]
        }
]

const sentSerReq=[
{
    //details about the requests that i had sent to others. title, to whom (specific person/to everyone) , category, priority, description, status(accepted, pending, finish, or rejected if it has been sent to specific person), publish date, accepted date, ending date
    //reviews and others comments, rates(start) about the services that you've provided to others.  
    
    //published date is here
    title : '06/07/2021',
    data: [
        {
            id: 1,
            title: 'Need a garden chair',
            description: "My house requires a garden chair to be made. if anyone can, please accept my request",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '12/06/2021',
            serviceCategory: "House and Garden",  
            priorityCategory: [1],
            status: "pending",
            totalViews: 14,
            toWhome:'everyone', 

        },
        {
            id: 2,
            title: 'Need a garden chair',
            description: "My house requires a garden chair to be made. if anyone can, please accept my request",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '12/06/2021', 
            serviceCategory: "House and Garden", 
            priorityCategory: [3],
            status: "pending",
            totalViews: 14,
            toWhome:'Amith Perera', 

        },{
            id: 3,
            title: 'Need a garden chair',
            description: "My house requires a garden chair to be made. if anyone can, please accept my request",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '12/06/2021', 
            serviceCategory: "House and Garden", 
            priorityCategory: [1],
            status: "pending",
            totalViews: 14,
            toWhome:'Sampath Silva', 

        },{
            id: 4,
            title: 'Need a garden chair',
            description: "My house requires a garden chair to be made. if anyone can, please accept my request",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '12/06/2021', 
            serviceCategory: "House and Garden", 
            priorityCategory: [2],
            status: "pending",
            totalViews: 14,
            toWhome:'everyone', 

        },
    ]
}
]

// ------------------------------------------------------------------------------------------------------
//Data for the Items pages

const transactionMethod= [
    {
        id:1,
        for: 'Cash'
    },
    {
        id:2, 
        for: 'Barter'
    }, 
    {
        id:3,
        for: 'Free'
    }, 
    {
        id:4,
        for: 'Rent'
    }, 
    {
        id:5, 
        for: 'Borrow'
    }
]

const searchItems =[
    {
        id: 1,
        itemName: "Leaks" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 30 ,
        quantity: "100g",   //100g is 30 rupees
        soldQuantity: "500g",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "750g",
        totalQuantity: "1250g",
        availability: "Avaliable",
        itemCategory:'food & drinks',
        publisherName: 'Samanmali Rajapaksha',
        publishedDate:"45mins",
        for : 'Rent',
    },
    {
        id: 2,
        itemName: "Slippers" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 130 ,
        quantity: "1",   //100g is 30 rupees
        soldQuantity: "7",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "8",
        totalQuantity: "15",
        availability: "Avaliable",
        itemCategory:'Cloths & Fashion',
        publisherName: 'Amila Srimal',
        publishedDate:"1h",
        for : 'Cash',
    },
    {
        id: 3,
        itemName: "Clay Pots" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 'Coconuts' ,
        quantity: "1",   //100g is 30 rupees
        soldQuantity: "50",   // totalQuantity = soldQuantity + available Quantity
        availablegQuantity: "0",
        totalQuantity: "50",
        availability: "Not Avaliable",
        itemCategory:'Others',
        publisherName: 'Dhanapala Subashighe',
        publishedDate:"02/10/2020",
        for : 'Barter',
    },
    {
        id: 4,
        itemName: "Milk" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 80 ,
        quantity: "100ml",   //100g is 30 rupees
        soldQuantity: "500ml",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "750ml",
        totalQuantity: "1250l",
        availability: "Avaliable",
        itemCategory:'food & drinks',
        publisherName: 'Lankmal Wijesooriya',
        publishedDate:"01/10/2020",
        for : 'Rent',
    }, 
    {
        id: 5,
        itemName: "Leaks" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 30 ,
        quantity: "100g",   //100g is 30 rupees
        soldQuantity: "500g",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "750g",
        totalQuantity: "1250g",
        availability: "Avaliable",
        itemCategory:'food & drinks',
        publisherName: 'Samanmali Rajapaksha',
        publishedDate:"45mins",
        for : 'Cash',
    },

    {
        id: 6,
        itemName: "Slippers" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 130 ,
        quantity: "1",   //100g is 30 rupees
        soldQuantity: "7",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "8",
        totalQuantity: "15",
        availability: "Avaliable",
        itemCategory:'Cloths & Fashion',
        publisherName: 'Amila Srimal',
        publishedDate:"1h",
        for : 'Barter',
    },
    {
        id: 7,
        itemName: "Clay Pots" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 120 ,
        quantity: "1",   //100g is 30 rupees
        soldQuantity: "50",   // totalQuantity = soldQuantity + available Quantity
        availablegQuantity: "0",
        totalQuantity: "50",
        availability: "Not Avaliable",
        itemCategory:'Others',
        publisherName: 'Dhanapala Subashighe',
        publishedDate:"02/10/2020",
        for : 'Rent',
    },
    {
        id: 8,
        itemName: "Wooden Cupboard" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'A 3 store wooden rack is available for trade. If anyone interested, let me know', 
        price: 80 ,
        quantity: "100ml",   //100g is 30 rupees
        soldQuantity: "500ml",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "750ml",
        totalQuantity: "1250l",
        availability: "Avaliable",
        itemCategory:'food & drinks',
        publisherName: 'Lankmal Wijesooriya',
        publishedDate:"01/10/2020",
        for : 'Barter',
    },              
]

const itemsRequestList =[
    {
        id:1, 
        itemName: 'Van',
        description:"Need a small bus for 2 days that facilities for 28 members. If anyone interested, please inform me.",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        publisherName:"Pavan Maduranga",
        publishedDate:"13/10/2021",
        prioroty: 'medium',
        for: 'Rent',
        quantity: 1,
        itemCategory: "Travelling & Vehicles",
        toMe: 'No', 
        for: 'Rent',
    },
    {
        id:2, 
        itemName: 'Betel',
        description:"I need 50 Betels",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        publisherName:"Pavan Maduranga",
        publishedDate:"12/10/2021",
        prioroty: 'medium',
        for: 'Cash',
        quantity: 50,
        itemCategory: "Food & Drink",
        toMe: 'Yes', 
    },
    {
        id:3, 
        itemName: 'Coconut',
        description:"I would like to exchange my rise harvest with coconut.",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        publisherName:"Pavani Madushika",
        publishedDate:"12/10/2021",
        prioroty: 'Low',
        for: 'Barter',
        quantity: '7kg',
        itemCategory: "Food & Drink",
        toMe: 'No', 
    },
    {
        id:4, 
        itemName: 'Betel',
        description:"Ane mata bulath witak thiyanawa nam denna kawuru hari. mata ingriisi ba :(",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        publisherName:"Sunimal Roxs",
        publishedDate:"12/10/2021",
        prioroty: 'medium',
        for: 'Cash',
        quantity: 50,
        itemCategory: "Food & Drink",
        toMe: 'Yes', 
    },
    {
        id:5, 
        itemName: 'Phone charger',
        description:"Need a Nexus 6 phone charger",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        publisherName:"Pavan Maduranga",
        publishedDate:"12/10/2021",
        prioroty: 'High',
        for: 'Cash',
        quantity: 1,
        itemCategory: "Computing, Mobile & Technology",
        toMe: 'No', 
    },
    {
        id:6, 
        itemName: 'Phone charger',
        description:"Need a Nexus 6 phone charger",
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        publisherName:"Pavan Maduranga",
        publishedDate:"12/10/2021",
        prioroty: 'High',
        for: 'Cash',
        quantity: 1,
        itemCategory: "Computing, Mobile & Technology",
        toMe: 'No', 
    },
    {
        id: 8,
        itemName: "Milk" ,
        photo: require("../assets/images/pineapple.jpg"),
        description: 'pajofiakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 
        price: 80 ,
        quantity: "100ml",   //100g is 30 rupees
        soldQuantity: "500ml",   // totalQuantity = soldQuantity + available Quantity
        availableQuantity: "750ml",
        totalQuantity: "1250l",
        availability: "Avaliable",
        itemCategory:'food & drinks',
        publisherName: 'Lankmal Wijesooriya',
        publishedDate:"01/10/2020",
        for : 'Cash',
    },
]


const ApprovedItemReq = [
    {
        //accepted date is taken as the title
    title : (currentDate.toString()),
    data: [
        {
            id: 1,
            itemName: 'Chain Saw',
            description: "A chainsaw is needed for 4 days by tommorow. If anyone has, plz accept my request.",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '18/06/2021', 
            publisherName:"Mike Mike", 
            publishedDate: "45min",
            itemCategory: "House & Garden", 
            prioroty: 'High',
            for: 'Rent',
           // accept: 
            toMe: 'Yes', 

        },
        {
            id: 2,
            itemName: 'Mettress',
            description: "Need a metterss for an affordable price",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '18/06/2021', 
            publisherName:"Mike Mike", 
            publishedDate: "45min",
            itemCategory: "House & Garden", 
            prioroty: 'High',
            for:'',
           // accept: 
            toMe: 'Yes', 
        },
        {
            id: 3,
            itemName: 'Wooden Rack',
            description: "A 3 store wooden rack is available for trade. If anyone interested, let me know",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '18/06/2021', 
            publisherName:"Mike Mike", 
            publishedDate: "45min",
            itemCategory: "categories", 
            prioroty: 'High',
           // accept: 
            toMe: 'Yes', 
        },
        {
            id: 4,
            itemName: 'Betels',
            description: "i need 50 betels",
            profilePic: require("../assets/dummyData/wrap_sandwich.png"),
            closingDate: '18/06/2021', 
            publisherName:"Mike Mike", 
            publishedDate: "45min",
            itemCategory: "Food & Drink", 
            prioroty: 'High',
           // accept: 
            toMe: 'Yes', 
        },
    ]
    },
    {
        title : '6/7/2021',
        data: [
            {
                id: 1,
                title: 'Create a website',
                description: "i need to create a website for my university project",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '07/06.2021', 
                publisherName:"Mike Mike", 
                postedDate: "45min",
                serviceCategory: "Computing & Technology", 
                priorityCategory: [1],
               // accept: 
                toMe: 'Yes', 
            },
            {
                id: 2,
                title: 'Repair the iron',
                description: "The iron is brocken. Someone please help to make it",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '10/06/2021',
                publisherName:"Snadra Aros", 
                postedDate:"13h",
                serviceCategory: "ELectronics and Electricals",
                priorityCategory: [3],
               // accept: 
                toMe: 'No'        
            },
            {
                id: 3,
                title: 'Need a garden chair',
                description: "My house requires a garden chair to be made. if anyone can, please accept my request",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '11/06/2021', 
                publisherName:"Damayanthi Wijeweera", 
                postedDate: "08/12",
                serviceCategory: "oisef", 
                priorityCategory: [2],
            // accept: 
                toMe: 'No'      
            }, 
            {
                id: 4,
                title: 'Need a garden chair',
                description: "My house requires a garden chair to be made. if anyone can, please accept my request",
                profilePic: require("../assets/dummyData/wrap_sandwich.png"),
                closingDate: '12/06/2021', 
                publisherName:"Akila Shrimal", 
                postedDate: '07/12',
                serviceCategory: "oiasdj", 
                priorityCategory: [1],
               // accept: 
                toMe: 'No'        
            },
        ]
        }
]


export default {
    myProfile,
    categories,
    menu,
    priorityCategory,
    servicesRequestList,
    ApprovedServReq,
    sentSerReq,
    searchItems,
    itemsRequestList, 
}