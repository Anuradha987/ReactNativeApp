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
        name: "All",
        icon: require("../assets/icons/all.png")
    },
    {
        id: 2,
        name: "Agriculture",
        icon: require("../assets/icons/Agricultural.png")
    },
    {
        id: 23,
        name: "Business &\nFinance",
        icon: require("../assets/icons/business.png")
    },
    {
        id: 4,
        name: "Clothing &\nFashion",
        icon: require("../assets/icons/Clothes.png")
    },
    {
        id: 5,
        name: "Computing &\nMobile",
        icon: require("../assets/icons/computing.png")
    },
    {
        id: 6,
        name: "Educational",
        icon: require("../assets/icons/Education.png")
    },
    {
        id: 7,
        name: "Electronics &\nElectrics",
        icon: require("../assets/icons/Electronics.png")
    },
    {
        id: 8,
        name: "Entertainment",
        icon: require("../assets/icons/Entertainment.png")
    },
    {
        id: 9,
        name: "Environment",
        icon: require("../assets/icons/Environment.png")
    },
    {
        id: 10,
        name: "Food &\nDrinks",
        icon: require("../assets/icons/foods.png")
    },
    {
        id: 11,
        name: "Health &\nMedication",
        icon: require("../assets/icons/Health.png")
    },
    {
        id: 12,
        name: "Home &\nGardening",
        icon: require("../assets/icons/homeGarden.png")
    },
    {
        id: 13,
        name: "Kids",
        icon: require("../assets/icons/Kids.png")
    },
    {
        id: 14,
        name: "Law",
        icon: require("../assets/icons/Law.png")
    },
    {
        id: 15,
        name: "Pets",
        icon: require("../assets/icons/pets.png")
    },
    {
        id: 16,
        name: "Photography",
        icon: require("../assets/icons/photography.png")
    },
    {
        id: 17,
        name: "Sports &\nFitness",
        icon: require("../assets/icons/Sports.png")
    },
    {
        id: 18,
        name: "Traveling &\nVehicles",
        icon: require("../assets/icons/Traveling.png")
    },
    {
        id: 19,
        name: "Other",
        icon: require("../assets/icons/other.png")
    },
]

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

const priorityCategory = [
    {
        id: 1,
        priority: 'high',
        color: 'rgba(255,51,51,1)',
    },
    {
        id: 2,
        priority: 'medium', 
        color: 'rgba(222,255,0,1)',
    },
    {
        id: 3,
        priority: 'low', 
        color: 'rgba(71,214,56,1)',
    }
]

const orderOrRequestStatus=[
    {
        //When user click on the accept button on a recieved request/order
        id:1, 
        reqStatus: "Accepted",
    }, 
    {
        //When the recieved request/order hasn't accepted or rejected by anyone. Simply when you publish a request or an order, its initial status willbe saved as 'Pending'
        id:2, 
        reqStatus: "Pending",
    }, 
    {
        //WHen the user click on the rejected btn on a recieved request/order
        id:3, 
        reqStatus: "Rejected",
    }, 
    {
        //When the user click on the complete btn after accepting the received request/order.
        id:4, 
        reqStatus: "Completed",
    }, 
    {
        //When the user click on Cancel btn after accepting the received request/order. Simply, user accepted the request. But he/she unable to complete it. 
        id:5, 
        reqStatus: "Canceled",
    }, 
]



    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    var currentDate = date + '/' + month + '/' + year 
    + ' ' + hours + ':' + min + ':' + sec

const recieveRequestForMe =[
    {
        id: 1,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDate: '45min',
        senderName: 'Natasha Perera', 
        reqTitle: 'Preparing Birthday Cake', 
        cateIcon: require("../assets/icons/foods.png"),
        cateName: 'Food & Drinks',
        description: "i need to create a website for my university project",
        priority: 'High',
        toMe: 'Yes',

    },
    {       
        id: 2,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDate: '13h',
        senderName: 'Snadra Aros', 
        reqTitle: 'Repair the iron', 
        cateIcon: require("../assets/icons/Electronics.png"),
        cateName: 'Electronics & Electrics',
        description: "The iron is brocken. Someone please help to make it",
        priority: 'High',
        toMe: 'Yes',
    },
    {
        id: 3,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDate: '10/06/21',
        senderName: 'Damayanthi Wijeweera', 
        reqTitle: 'Need a garden chair', 
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        priority: 'Low',
        toMe: 'Yes',
    },
    
    {        
        id: 4,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDate: '11/06/21',
        senderName: 'Akila Shrimal', 
        reqTitle: 'Chilliy plants', 
        cateIcon: require("../assets/icons/Agricultural.png"),
        cateName: 'Agriculture',
        description: "I need chilly plants. Please let me know if you have.",
        priority: 'Medium',
        toMe: 'Yes',
    },
    {
        id: 5,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDate: '11/06/21',
        senderName: 'Akila Shrimal', 
        reqTitle: 'Need a garden chair', 
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        priority: 'Medium',
        toMe: 'Yes',
    },
]

const OtherRecieveRequest =[
    {
        id: 1,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDateOther: '45min',
        senderName: 'Natasha Perera', 
        reqTitleOthers: 'Website Development', 
        cateIconOthers: require("../assets/icons/Clothes.png"),
        CateNameOther: 'Food & Drinks',
        description: "i need to create a website for my university project",
        priority: 'High',
        toMe: 'No',

    },
    {       
        id: 2,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDateOther: '13h',
        senderName: 'Snadra Aros', 
        reqTitleOthers: 'Repair the iron', 
        cateIconOthers: require("../assets/icons/Electronics.png"),
        CateNameOther: 'Electronics & Electrics',
        description: "The iron is brocken. Someone please help to make it",
        priority: 'High',
        toMe: 'No',
    },
    {
        id: 3,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDateOther: '10/06/21',
        senderName: 'Damayanthi Wijeweera', 
        reqTitleOthers: 'Need a garden chair', 
        cateIconOthers: require("../assets/icons/homeGarden.png"),
        CateNameOther: 'Home & Gardening',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        priority: 'Low',
        toMe: 'No',
    },
    
    {        
        id: 4,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDateOther: '11/06/21',
        senderName: 'Akila Shrimal', 
        reqTitleOthers: 'Need a garden chair', 
        cateIconOthers: require("../assets/icons/homeGarden.png"),
        CateNameOther: 'Home & Gardening',
        description: "My house require a garden chair to be made. if anyone can, please accept my request",
        priority: 'Medium',
        toMe: 'No',
    },
    {
        id: 5,
        senderImage: require("../assets/images/avatar-1.jpg"),
        sendingDateOther: '11/06/21',
        senderName: 'Akila Shrimal', 
        reqTitleOthers: 'Need a garden chair', 
        cateIconOthers: require("../assets/icons/Agricultural.png"),
        CateNameOther: 'Agriculture',
        description: "I am searching for some chilly plants to plant. If anyone has, please let me know.",
        priority: 'Medium',
        toMe: 'No',
    },
]


    //details about the requests that i had sent to others. title, to whom (specific person/to everyone) , category, priority, description, status(accepted, pending, finish, or rejected if it has been sent to specific person), publish date, accepted date, ending date
    //reviews and others comments, rates(start) about the services that you've provided to others.  

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
        description:"Need a small bus for 2 days for 28 people. If anyone like to rent a bus, please inform me.",
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

const itemsSearchList =[
    {
        id: 1, 
        itemName: "Avocado", 
        itemImage : require("../assets/images/organic-avocados.jpg"),
        categoryIcon : require("../assets/icons/foods.png"),
        cateName: "Food & Drinks",
        availability: "Available",
        tradeMethod: "For Cash", 
        price : "Rs.30", 
        quantity: "100g"
    },
    {
        id: 2, 
        itemName: "Pizza", 
        itemImage : require("../assets/images/pizza.jpg"),
        categoryIcon : require("../assets/icons/foods.png"),
        cateName: "Food & Drinks",
        availability: "Not Available",
        tradeMethod: "For Cash", 
        price : "Rs.1030", 
        quantity: "1"
    },
    {
        id: 3, 
        itemName: "UMYOGO Women's Running", 
        itemImage : require("../assets/images/shoes.jpg"),
        categoryIcon : require("../assets/icons/Clothes.png"),
        cateName: "Sports & Fitness",
        availability: "Available",
        tradeMethod: "Rent", 
        price : "Rs.250", 
        quantity: "1 day"
    },
]

const myItemsData=[
    {
        id: 1,
        publishDate: "12/12/2021",
        pageNo: "1",
        itemImage: require("../assets/images/organic-avocados.jpg"),
        itemTitle: "Avecado",
        cateIcon :  require("../assets/icons/foods.png"),
        cateName : "Food & Drinks",
        totalAmount : "550g",
        tradingMethodlbl: "For Cash",
        price: "Rs.30",
        UnitQuantity: "100g",
        noOfNotification: 10,

        requests:[
           {
                id: "1", 
                senderProPic: require("../assets/images/istockphoto-523147245-612x612.jpg"),
                senderName : "Sunimal Kumara",
                sendTime: "13 mins ago", 
                amountOrdered: "2 Large Pizza",
                returningDateOrExchangedFor: "20/12/2021",                
           },
        ]
    },
    {
        id: 2,
        publishDate: "13/12/2021",
        pageNo: "2",
        itemImage: require("../assets/images/pineapple.jpg"),
        itemTitle: "Avecado",
        cateIcon :  require("../assets/icons/foods.png"),
        cateName : "Food & Drinks",
        totalAmount : "550g",
        tradingMethodlbl: "For Cash",
        price: "Rs.30",
        UnitQuantity: "100g",
    },
    {
        id: 3,
        publishDate: "14/12/2021",
        pageNo: "3",
        itemImage: require("../assets/images/pizza.jpg"),
        itemTitle: "Avecado",
        cateIcon :  require("../assets/icons/foods.png"),
        cateName : "Food & Drinks",
        totalAmount : "5",
        tradingMethodlbl: "For Barter",
        price: "Rs.1350",
        UnitQuantity: "1",
    },
    {
        id: 4,
        publishDate: "15/12/2021",
        pageNo: "4",
        itemImage: require("../assets/images/shoes.jpg"),
        itemTitle: "Avecado",
        cateIcon :  require("../assets/icons/Sports.png"),
        cateName : "Sports & Fitness",
        totalAmount : "2",
        tradingMethodlbl: "For Rent",
        price: "Rs.300 / Per Day",
        UnitQuantity: "Per Day",        
    },
]

const pendingReceieveServicesRequests =[
    {
        id: 1,
        senderImage: require("../assets/images/avatar-1.jpg"),
        acceptDate : '02/04/21', 
        senderName:'Sunil Ariyarathna',
        priorityLevel: 'high', 
        reqTitle: 'Water Line is Broken',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 2,
        senderImage: require("../assets/images/avatar-1.jpg"),
        acceptDate : '02/04/21', 
        senderName:'Damayanthi Wijeweera',
        priorityLevel: 'low', 
        reqTitle: 'Create a website',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 3,
        senderImage: require("../assets/images/avatar-1.jpg"),
        acceptDate : '02/04/21', 
        senderName:'Mike Mike',
        priorityLevel: 'medium', 
        reqTitle: 'Repair the iron',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 4,
        senderImage: require("../assets/images/avatar-1.jpg"),
        acceptDate : '02/04/21', 
        senderName:'Snadra Aros',
        priorityLevel: 'low', 
        reqTitle: 'Need a garden chair',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 5,
        senderImage: require("../assets/images/avatar-1.jpg"),
        acceptDate : '02/04/21', 
        senderName:'Akila Shrimal',
        priorityLevel: 'high', 
        reqTitle: 'Water Line is Broken',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
]

const completedReceieveServicesRequests =[
    {
        id: 1,
        senderImage: require("../assets/images/avatar-1.jpg"),
        completeDate : '02/04/21', 
        senderName:'Sunil Ariyarathna',
        priorityLevel: 'high', 
        reqTitle: 'Water Line is Broken',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 2,
        senderImage: require("../assets/images/avatar-1.jpg"),
        completeDate : '02/04/21', 
        senderName:'Damayanthi Wijeweera',
        priorityLevel: 'low', 
        reqTitle: 'Create a website',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 3,
        senderImage: require("../assets/images/avatar-1.jpg"),
        completeDate : '02/04/21', 
        senderName:'Mike Mike',
        priorityLevel: 'medium', 
        reqTitle: 'Repair the iron',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 4,
        senderImage: require("../assets/images/avatar-1.jpg"),
        completeDate : '02/04/21', 
        senderName:'Snadra Aros',
        priorityLevel: 'low', 
        reqTitle: 'Need a garden chair',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
    {
        id: 5,
        senderImage: require("../assets/images/avatar-1.jpg"),
        completeDate : '02/04/21', 
        senderName:'Akila Shrimal',
        priorityLevel: 'high', 
        reqTitle: 'Water Line is Broken',
        cateIcon: require("../assets/icons/homeGarden.png"),
        cateName: 'Home & Gardening',
    },
]

const myServicesList = [
    {
        id: 1, 
        pageNo : '1', 
        serviceTitle: 'Making School uniforms',
        description: "I sew school uniforms for girls and boys who goes toDarmapala Collage, Mahinda Rajapaksha Collage, Lumbini Collage. Available after 6 PM every weekday.",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes &amp; Fashion"
    },
    {
        id: 2, 
        pageNo : '2', 
        serviceTitle: 'Making School uniforms',
        description: "I sew school uniforms for girls and boys who goes toDarmapala Collage, Mahinda Rajapaksha Collage, Lumbini Collage. Available after 6 PM every weekday.",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes &amp; Fashion"
    },
    {
        id: 3, 
        pageNo : '3', 
        serviceTitle: 'Making School uniforms',
        description: "I sew school uniforms for girls and boys who goes toDarmapala Collage, Mahinda Rajapaksha Collage, Lumbini Collage. Available after 6 PM every weekday.",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes &amp; Fashion"
    },
    {
        id: 4, 
        pageNo : '4', 
        serviceTitle: 'Making School uniforms',
        description: "I sew school uniforms for girls and boys who goes toDarmapala Collage, Mahinda Rajapaksha Collage, Lumbini Collage. Available after 6 PM every weekday.",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes &amp; Fashion"
    },
]

const servicesRequestsSent=[
    {
        id: 1,
        reqTitle: "Need a garden chair",
        description: "My house requires a garden chair to be made. if anyone can, please accept my request",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes & Fashion",
        sentDate: '02/04/21',
        sentTo: 'Sunil Ariyarathna',
        reqStatus: 'Accepted',

        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '12/06/2021',
        totalViews: 14,

    },
    {
        id: 2,
        reqTitle: 'Need a garden chair',
        description: "My house requires a garden chair to be made. if anyone can, please accept my request",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes & Fashion",
        sentDate: '02/04/21',
        sentTo: 'Amith Perera',
        reqStatus: 'Pending',

        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '12/06/21', 
        totalViews: 14,

    },{
        id: 3,
        reqTitle: 'Need a garden chair',
        description: "My house requires a garden chair to be made. if anyone can, please accept my request",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes & Fashion",
        sentDate: '02/04/21',
        sentTo: 'Sampath Silva',
        reqStatus: 'Rejected',

        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '12/06/21', 
        totalViews: 14,

    },{
        id: 4,
        reqTitle: 'Need a garden chair',
        description: "My house requires a garden chair to be made. if anyone can, please accept my request",
        cateIcon : require("../assets/icons/Clothes.png"),
        cateName: "Clothes & Fashion",
        sentDate: '02/04/21',
        sentTo: 'Everyone',
        reqStatus: 'Completed',
        
        profilePic: require("../assets/dummyData/wrap_sandwich.png"),
        closingDate: '12/06/21',
        totalViews: 14, 

    },
]

const itemOrdersSent=[
    {
        id:1, 
        reqTitle: 'UMYOGO Women & Runni...',
        cateName: 'Sports & Fitness', 
        cateIcon:  require("../assets/icons/Clothes.png"),
        reqStatus: 'Pending',
        price: 'Rs. 250', 
        quantity: '1 day',
        transactionMethod: 'Rent',
        itemImage:  require("../assets/images/shoes.jpg"),
        amountReturningDate: '2 Pairs - For 2 days',
    },    
    {
        id:2, 
        reqTitle: 'Samsung phone charger',
        cateName: 'Computer & Mobile', 
        cateIcon:  require("../assets/icons/computing.png"),
        reqStatus: 'Approved',
        price: '-', 
        quantity: '-',
        transactionMethod: 'Borrow',
        itemImage:  require("../assets/images/samsung_adaptive_fast_charger_2_1533813223.jpg"),
        amountReturningDate: '1 Charger - Tomorrow',
    },
    {
        id:3, 
        reqTitle: 'Avocado',
        cateName: 'Food & Drinks', 
        cateIcon:  require("../assets/icons/foods.png"),
        reqStatus: 'Rejected',
        price: 'Rs. 30', 
        quantity: '100g',
        transactionMethod: 'For Cash',
        itemImage:  require("../assets/images/organic-avocados.jpg"),
        amountReturningDate: '150g',
    },
    {
        id:4, 
        reqTitle: "Lady's Blouse",
        cateName: 'Clothing & Fashion', 
        cateIcon:  require("../assets/icons/Clothes.png"),
        reqStatus: 'Completed',
        price: '-', 
        quantity: '-',
        transactionMethod: 'Free',
        itemImage:  require("../assets/images/istockphoto-653003428-612x612.jpg"),
        amountReturningDate: '5 Blouses',
    },
    {
        id:5, 
        reqTitle: 'Hawaiian-Pizza',
        cateName: 'Food & Drinks', 
        cateIcon:  require("../assets/icons/foods.png"),
        reqStatus: 'Canceled',
        price: 'Rs. 1350', 
        quantity: '1',
        transactionMethod: 'Cash',
        itemImage:  require("../assets/images/pizza.jpg"),
        amountReturningDate: '2 Large Pizzas',
    },
]
export default {
    myProfile,
    categories,    
    transactionMethod,
    priorityCategory,
    orderOrRequestStatus,
    recieveRequestForMe,
    OtherRecieveRequest,
    searchItems,
    itemsRequestList, 
    itemsSearchList,
    myItemsData,
    pendingReceieveServicesRequests,
    completedReceieveServicesRequests,
    myServicesList,
    servicesRequestsSent,
    itemOrdersSent,
}