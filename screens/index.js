//Notice board Main layout
import DB_MainLayout from './DB_MainLayout'

// Services Main Layout
import S_MainLayout from "./S_MainLayout"

//Services Home
import S_Sent from "./S_Sent/S_Sent"
import SSentDetailsAfterAccepting from './S_Sent/SSentDetailsAfterAccepting';
//Services Search
import S_Search from "./S_Search/S_Search";

//Services My
import S_My from "./S_My/S_My"

//Services Approvals
import S_Approvals from "./S_Approvals/S_Approvals";
import SAfterApproved from './S_Approvals/SAfterApproved';
import SAfterCompleted from './S_Approvals/SAfterCompleted';

//Services Requests
import S_Requests from "./S_Requests/S_Requests"
import S_RequestsDetails  from './S_Requests/S_RequestsDetails';


//Item MainLayout
import I_MainLayout from './I_MainLayout'

//Item Home
import I_Sent from './I_Sent/I_Sent'

//item Search
import I_Search from './I_Search/I_Search'
import ViewItems from './I_Search/ViewItems';

//item My
import I_My from './I_My/I_My'

//Item Approvals
import I_Approvals from './I_Approvals/I_Approvals'

//Item Requests
import I_Requests from './I_Requests/I_Requests'



//Business MainLayout
import B_MainLayout from './B_MainLayout'

//Business Sent
import B_Sent from './B_Sent/B_Sent'

//Business Search
import B_Search from './B_Search/B_Search'

//Business My
import B_My from './B_My/B_My'

//Business Recieved Requests
import B_ReceiveReq from './B_ReceiveReq/B_ReceiveReq'

//Business Sent Requests
import B_Approvals from './B_Approvals/B_Approvals'

import MyProfile from './MyProfile'
import NewReqForm from './NewReqForm';
import PlacingOrders from './PlacingOrders';
import UserProfile from './UserProfile';
import Register from './login_SignUp/Register';
import Login from './login_SignUp/Login'
import Otp from './login_SignUp/Otp';
import PasswordRecovery from './login_SignUp/PasswordRecovery';

export {
    DB_MainLayout,    

    S_MainLayout,
    S_Search,
    S_Sent, 
    SSentDetailsAfterAccepting,
    S_My,
    S_Approvals, 
    SAfterApproved, 
    SAfterCompleted, 
    S_Requests, 
    S_RequestsDetails,

    I_MainLayout,
    I_Search, 
    ViewItems,
    I_Sent,
    I_My,
    I_Approvals,
    I_Requests, 

    B_MainLayout, 
    B_Search,
    B_Sent ,
    B_My, 
    B_ReceiveReq, 
    B_Approvals,

    MyProfile, 
    NewReqForm, 
    UserProfile, 
    Register, 
    Login, 
    Otp, 
    PasswordRecovery, 
}
