import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/Admin/Dashboard/Dashboard';
import MasterTap from '../screens/Admin/masters/MasterTap';
import Donation from '../screens/Admin/Donation/Donation/Donation';
import RoleManagement from '../screens/Admin/SystemManagement/RoleManagement/RoleManagement';
import UserManagement from '../screens/Admin/SystemManagement/UserManagement/UserManagement';
import VoucherManagement from '../screens/Admin/SystemManagement/VoucherManagement/VoucherManagement';
import InfoElectronic from '../screens/Admin/Donation/Donation/InfoElectronic';
import Adminprivateroute from '../components/AdminOutlate/Adminprivateroute';
import ChangeStatus from '../screens/Admin/Reports/OnlineDonations/Cheque/ChangeStatus';
import UpdateDonationType from '../screens/Admin/masters/Donationmaster/UpdateDonationType';
import EmployeeUserInfo from '../screens/Admin/SystemManagement/UserManagement/EmployeeUserInfo';
import Assign from '../screens/Admin/SystemManagement/Assign/Assign';
import Chequeinfo from '../screens/Admin/Reports/OnlineDonations/Cheque/Chequeinfo';
import Request from '../screens/Admin/SystemManagement/Request/Request';
import PrintContent from '../screens/Admin/compoments/PrintContent';
import PrintContentManul from '../screens/Admin/compoments/PrintContentManual';
import ManualDonation from '../screens/Admin/Donation/ManualDonation/ManualDonation';
import Signature from '../screens/Admin/Signature/Signature';
import DonationReportTap from '../screens/Admin/Reports/DonationReport/DonationReportTap';
import ManualDonationTap from '../screens/Admin/Reports/ManualDonationReports/ManualDonationTap';
import OnlineTap from '../screens/Admin/Reports/OnlineDonations/OnlineTap';
import DharamshalaTap from '../screens/Admin/Dharamshala/DharamshalaTap';
import RoomBookingTap from '../screens/Admin/RoomBooking/RoomBookingTap';
import ProfileAdminAndEmp from '../screens/Admin/Profile/ProfileAdminAndEmp';
import ParticularUserVoucher from '../screens/Admin/SystemManagement/VoucherManagement/ParticularUserVoucher';
import SystemTap from '../screens/Admin/SystemManagement/SystemTap';
///electronic donation routes
import ManualCash from '../screens/Admin/Reports/DonationReport/manualCash/ManualCash';
import Itemdonation from '../screens/Admin/Reports/DonationReport/Itemdonation/Itemdonation';
import Consolidated from '../screens/Admin/Reports/DonationReport/Consolidated/Consolidated';
import Electornic from '../screens/Admin/Reports/DonationReport/Electornic/Electornic';
import ManualCheque from '../screens/Admin/Reports/DonationReport/ManualCheque/ManualCheque';
import HeadReport from '../screens/Admin/Reports/DonationReport/HeadReport/HeadReport';
import CancelDonation from '../screens/Admin/Reports/DonationReport/CancelDonation/CancelDonation';
/// manual donation routes
import Consolidated1 from '../screens/Admin/Reports/ManualDonationReports/Consolidated/Consolidated';
import HeadReport1 from '../screens/Admin/Reports/ManualDonationReports/HeadReport/HeadReport';
import ManualReports from '../screens/Admin/Reports/ManualDonationReports/ManaulReport/ManualReports';
import ManualCash1 from '../screens/Admin/Reports/ManualDonationReports/ManualCash/ManualCash';
import ManualElectronic from '../screens/Admin/Reports/ManualDonationReports/ManualElectronic/ManualElectronic';
import ManualItem1 from '../screens/Admin/Reports/ManualDonationReports/ManualItem/ManualItem';

///online donation routes

import Cheque from '../screens/Admin/Reports/OnlineDonations/Cheque/Cheque';
import Online from '../screens/Admin/Reports/OnlineDonations/Online/Online';
import OnlinepaymentFail from '../screens/Admin/Reports/OnlineDonations/OnlinepaymentFail/OnlinepaymentFail';
/// all report routes

import AllHead from '../screens/Admin/Reports/AllReport/AllHead';
import AllConsolidated from '../screens/Admin/Reports/AllReport/AllConsolidated';
import AllOnline from '../screens/Admin/Reports/AllReport/AllOnline';
//dharamshala

import PaymentSuccess from '../screens/Admin/RoomBooking/PaymentSuccess/PaymentSuccess';
import CashPaymentSuccess from '../screens/Admin/RoomBooking/PaymentSuccess/CashPaymentSuccess';
import RoomBookingCetificate from '../screens/Admin/RoomBooking/RoomBookingCetificate/RoomBookingCetificate';
import RoomBookingPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/RoomBookingPrint';
// room booking routes
import Dashbords from '../screens/Admin/RoomBooking/Dashbord/Dashbord';
import CheckIn from '../screens/Admin/RoomBooking/CheckIn/CheckIn';
import Hold from '../screens/Admin/RoomBooking/Hold/Hold';
import RoomShift from '../screens/Admin/RoomBooking/RoomShift/RoomShift';

import PrintRoomBooking from '../screens/Admin/RoomBooking/RoomBookingCetificate/PrintRoomBooking';
//online receipt
import OnlineadminRecipt from '../screens/Admin/Reciept/OnlineadminRecipt';
import CheckoutReceipt from '../screens/Admin/RoomBooking/RoomBookingCetificate/CheckoutReceipt';
import ForceRoomChequeOut from '../screens/Admin/RoomBooking/RoomBookingCetificate/ForceRoomChequeOut';
import ForcePrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/ForcePrint';
import Onlyprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/Onlyprint';

import CheckinReports from '../screens/Admin/RoomBooking/RoomBookingReports/CheckinReports';
import Onlinecheckin from '../screens/Admin/RoomBooking/RoomBookingReports/Onlinecheckin';
import PrintOnlysetup from '../screens/Admin/RoomBooking/RoomBookingCetificate/PrintOnlysetup';
import OnlinePrintReceipt from '../screens/Admin/RoomBooking/RoomBookingCetificate/OnlinePrintReceipt';
import OnlinePrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/OnlinePrint';
import OnlineForce from '../screens/Admin/RoomBooking/RoomBookingCetificate/OnlineForce';
import OnlineforcePrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/OnlineforcePrint';
import OnlinecheckinReceipt from '../screens/Admin/RoomBooking/RoomBookingCetificate/OnlinecheckinReceipt';
import OnlinecheckinPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/OnlinecheckinPrint';
import CanceledHistory from '../screens/Admin/RoomBooking/RoomBookingReports/CanceledHistory';
import Holdhistory from '../screens/Admin/RoomBooking/RoomBookingReports/Holdhistory';

import Combine from '../screens/Admin/Reports/DonationReport/Combile/Combine';
import CombineManual from '../screens/Admin/Reports/ManualDonationReports/Combine/Combine';

import Consolided from '../screens/Admin/Reports/AllReport/Consolided';
import HistoryCheckout from '../screens/Admin/RoomBooking/RoomBookingCetificate/HistoryCheckout';
import HistoryCheckoutPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/HistoryCheckoutPrint';

//boli management
import Boli from '../screens/Admin/BoliManagement/Boli/Boli';
import PendingBoli from '../screens/Admin/BoliManagement/PendingBoli/PendingBoli';
import BoliCertificate from '../screens/Admin/BoliManagement/Certificate/BoliCertificate';
import BoliCertificatePrint from '../screens/Admin/BoliManagement/Certificate/BoliCertificatePrint';

///checkout receipt import
import CheckinCheckout from '../screens/Admin/RoomBooking/RoomBookingCetificate/CheckinCheckout';
import CheckinCheckoutPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/CheckinCheckoutPrint';
import CancelPrintout from '../screens/Admin/RoomBooking/RoomBookingCetificate/CancelPrintout';
import CancelReceipt from '../screens/Admin/RoomBooking/RoomBookingCetificate/CancelReceipt';

///Combine report routes
import ComBineTap from '../screens/Admin/Reports/CombineReports/ComBineTap';
import DonationCombine from '../screens/Admin/Reports/CombineReports/Donatinon/DonationCombine';
import OnlineCombine from '../screens/Admin/Reports/CombineReports/Online/OnlineCombine';
import ManulCombine from '../screens/Admin/Reports/CombineReports/Manual/ManulCombine';
import HoldCertificate from '../screens/Admin/RoomBooking/RoomBookingCetificate/HoldCertificate';
import Holdprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/Holdprint';
import Onlychecking from '../screens/Admin/RoomBooking/RoomBookingReports/Onlychecking';

import AllCheckoutPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/AllCheckoutPrint';
import AllChoutRecript from '../screens/Admin/RoomBooking/RoomBookingCetificate/AllCheckoutReceipt';
import ForceCheckoutHistory from '../screens/Admin/RoomBooking/RoomBookingReports/ForceCheckoutHistory';
import Allforcecheckout from '../screens/Admin/RoomBooking/RoomBookingCetificate/Allforcecheckout';
import Allforcecheckoutprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/Allforcecheckoutprint';
import AllcancalPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/AllcancalPrint';
import Allcencal from '../screens/Admin/RoomBooking/RoomBookingCetificate/Allcencal';

import Forcheckouthistory from '../screens/Admin/RoomBooking/RoomBookingCetificate/Forcheckouthistory';
import Forcecheckoutprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/Forcecheckoutprint';

import Acancelprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/Acancelprint';
import ACancel from '../screens/Admin/RoomBooking/RoomBookingCetificate/ACancel';

import AllReceipt from '../screens/Admin/RoomBooking/RoomBookingCetificate/AllReceipt';
import AllReceiptprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/AllReceiptprint';

import Newdashboard from '../screens/Admin/RoomBooking/Newdashboard/Newdashboard';

import ReceiptAllcheckout from '../screens/Admin/RoomBooking/RoomBookingCetificate/ReceiptAllcheckout';
import ReceiptAllcheckoutprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/ReceiptAllcheckoutprint';

import HistoryAllCheckoutPrint from '../screens/Admin/RoomBooking/RoomBookingCetificate/HistoryAllCheckoutPrint';
import HistoryAllCheckout from '../screens/Admin/RoomBooking/RoomBookingCetificate/HistoryAllCheckout';

import Newcheckin from '../screens/Admin/RoomBooking/CheckIn/Newcheckin';

import CancelOnlyprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/CancelOnlyprint';
import CancelOnlyreciept from '../screens/Admin/RoomBooking/RoomBookingCetificate/CancelOnlyreciept';

import Onlinecheckouthistort from '../screens/Admin/RoomBooking/RoomBookingCetificate/Onlinecheckouthistort';
import Onlinecheckouthistoryprint from '../screens/Admin/RoomBooking/RoomBookingCetificate/Onlinecheckouthistoryprint';

import BoliHistory from '../screens/Admin/BoliManagement/BoliHistory/BoliHistory';
import OnlinecheckHistotry from '../screens/Admin/RoomBooking/RoomBookingReports/OnlinecheckHistotry';

import PaidBoli from '../screens/Admin/BoliManagement/Paidboli/PaidBoli';
/// boli voucher
import BoliGroup from '../screens/Admin/BoliManagement/Boli Ledger/BoliGroup/BoliGroup';
import BoliLedger1 from '../screens/Admin/BoliManagement/Boli Ledger/BoliLedger/BoliLedger';
import BoliVoucher from '../screens/Admin/BoliManagement/Boli Ledger/BoliVoucher/BoliVoucher';
import Tally  from '../screens/Admin/BoliManagement/Boli Ledger/BoliLedger/Tally/Tally'
function AdminRoutes({ setopendashboard, setshowreciept }) {
  const [addleftmargin, setaddleftmargin] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/admin-panel/dashboard"
          element={
            <Adminprivateroute>
              <Dashboard setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/masters"
          element={
            <Adminprivateroute>
              <MasterTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/system"
          element={
            <Adminprivateroute>
              <SystemTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/updateprofle"
          element={
            <Adminprivateroute>
              <ProfileAdminAndEmp setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/uservoucher"
          element={
            <Adminprivateroute>
              <ParticularUserVoucher setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/electronicReports"
          element={
            <Adminprivateroute>
              <DonationReportTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/OnlineReports"
          element={
            <Adminprivateroute>
              <OnlineTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Dharamshala"
          element={
            <Adminprivateroute>
              <DharamshalaTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/roombooking"
          element={
            <Adminprivateroute>
              <RoomBookingTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manualReports"
          element={
            <Adminprivateroute>
              <ManualDonationTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/donation"
          element={
            <Adminprivateroute>
              <Donation setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manualdonation"
          element={
            <Adminprivateroute>
              <ManualDonation setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/rolemanagement"
          element={
            <Adminprivateroute>
              <RoleManagement setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/usermanagement"
          element={
            <Adminprivateroute>
              <UserManagement setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/vouchermanagement"
          element={
            <Adminprivateroute>
              <VoucherManagement setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/assign"
          element={
            <Adminprivateroute>
              <Assign setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/request"
          element={
            <Adminprivateroute>
              <Request setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/infoElectronic/:id"
          element={
            <Adminprivateroute>
              <InfoElectronic setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/reports/printcontent"
          element={
            <Adminprivateroute>
              <PrintContent
                setopendashboard={setopendashboard}
                setshowreciept={setshowreciept}
              />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/printContentmanul"
          element={
            <Adminprivateroute>
              <PrintContentManul
                setopendashboard={setopendashboard}
                setshowreciept={setshowreciept}
              />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/reports/changeStatus/:id"
          element={
            <Adminprivateroute>
              <ChangeStatus setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/reports/chequeinfo"
          element={
            <Adminprivateroute>
              <Chequeinfo setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/masters/updateDonationType/:id"
          element={
            <Adminprivateroute>
              <UpdateDonationType setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/masters/employeeUserInfo"
          element={
            <Adminprivateroute>
              <EmployeeUserInfo setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/signature"
          element={
            <Adminprivateroute>
              <Signature setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/electronic/report/cash"
          element={
            <Adminprivateroute>
              <ManualCash setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/electronic/report/elec"
          element={
            <Adminprivateroute>
              <Electornic setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/electronic/report/cancel-donations"
          element={
            <Adminprivateroute>
              <CancelDonation setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/electronic/report/item"
          element={
            <Adminprivateroute>
              <Itemdonation setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/electronic/report/cheque"
          element={
            <Adminprivateroute>
              <ManualCheque setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/electronic/report/headreport"
          element={
            <Adminprivateroute>
              <HeadReport setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/electronic/report/consolidated"
          element={
            <Adminprivateroute>
              <Consolidated setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manual/report/cash"
          element={
            <Adminprivateroute>
              <ManualCash1 setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manual/report/item"
          element={
            <Adminprivateroute>
              <ManualItem1 setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manual/report/elec"
          element={
            <Adminprivateroute>
              <ManualElectronic setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manual/report/cheque"
          element={
            <Adminprivateroute>
              <ManualReports setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manual/report/headreport"
          element={
            <Adminprivateroute>
              <HeadReport1 setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/manual/report/consolidated"
          element={
            <Adminprivateroute>
              <Consolidated1 setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/online/report/online"
          element={
            <Adminprivateroute>
              <Online setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/online/report/cheque"
          element={
            <Adminprivateroute>
              <Cheque setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/online/report/online-paymentfail"
          element={
            <Adminprivateroute>
              <OnlinepaymentFail setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        {/* <Route
          path="/admin-panel/allreport/head"
          element={
            <Adminprivateroute>
              <AllReportTap setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        /> */}
        <Route
          path="/admin-panel/allreport/allhead"
          element={
            <Adminprivateroute>
              <AllHead setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/allreport/allonline"
          element={
            <Adminprivateroute>
              <AllOnline setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/allreport/allconsolidated"
          element={
            <Adminprivateroute>
              <AllConsolidated setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/paymentsuccess"
          element={
            <Adminprivateroute>
              <PaymentSuccess setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/cashpaymentsuccess"
          element={
            <Adminprivateroute>
              <CashPaymentSuccess RoomBookingPrint={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/roombookingcetificate"
          element={
            <Adminprivateroute>
              <RoomBookingCetificate setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/RoomBookingPrint"
          element={
            <Adminprivateroute>
              <RoomBookingPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/Dashboard"
          element={
            <Adminprivateroute>
              <Dashbords setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/checkin"
          element={
            <Adminprivateroute>
              <CheckIn setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/hold"
          element={
            <Adminprivateroute>
              <Hold setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/roomshift"
          element={
            <Adminprivateroute>
              <RoomShift setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/online/recipt"
          element={
            <Adminprivateroute>
              <OnlineadminRecipt setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/Print/Room/Booking"
          element={
            <Adminprivateroute>
              <PrintRoomBooking setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/CheckoutReceipt"
          element={
            <Adminprivateroute>
              <CheckoutReceipt setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/ForceRoomChequeOut"
          element={
            <Adminprivateroute>
              <ForceRoomChequeOut setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/ForcePrint"
          element={
            <Adminprivateroute>
              <ForcePrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/printReceipt"
          element={
            <Adminprivateroute>
              <Onlyprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/checkinreports"
          element={
            <Adminprivateroute>
              <CheckinReports setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/onlinecheckin"
          element={
            <Adminprivateroute>
              <Onlinecheckin setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/PrintOnlysetup"
          element={
            <Adminprivateroute>
              <PrintOnlysetup setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/OnlinePrintReceipt"
          element={
            <Adminprivateroute>
              <OnlinePrintReceipt setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/OnlinePrint"
          element={
            <Adminprivateroute>
              <OnlinePrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/OnlineForce"
          element={
            <Adminprivateroute>
              <OnlineForce setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/OnlineforcePrint"
          element={
            <Adminprivateroute>
              <OnlineforcePrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/OnlinecheckinReceipt"
          element={
            <Adminprivateroute>
              <OnlinecheckinReceipt setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/OnlinecheckinPrint"
          element={
            <Adminprivateroute>
              <OnlinecheckinPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/CanceledHistory"
          element={
            <Adminprivateroute>
              <CanceledHistory setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/Holdhistory"
          element={
            <Adminprivateroute>
              <Holdhistory setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/Combine"
          element={
            <Adminprivateroute>
              <Combine setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Room/CombineManual"
          element={
            <Adminprivateroute>
              <CombineManual setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/Consolided"
          element={
            <Adminprivateroute>
              <Consolided setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/HistoryCheckout"
          element={
            <Adminprivateroute>
              <HistoryCheckout setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Room/HistoryCheckoutPrint"
          element={
            <Adminprivateroute>
              <HistoryCheckoutPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli"
          element={
            <Adminprivateroute>
              <Boli setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli/pendingboli"
          element={
            <Adminprivateroute>
              <PendingBoli setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli/certificate"
          element={
            <Adminprivateroute>
              <BoliCertificate setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli/certificate/print"
          element={
            <Adminprivateroute>
              <BoliCertificatePrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/CheckinCheckout"
          element={
            <Adminprivateroute>
              <CheckinCheckout setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/CheckinCheckoutPrint"
          element={
            <Adminprivateroute>
              <CheckinCheckoutPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/CancelReceipt"
          element={
            <Adminprivateroute>
              <CancelReceipt setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/CancelPrintout"
          element={
            <Adminprivateroute>
              <CancelPrintout setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/DonationCombine"
          element={
            <Adminprivateroute>
              <DonationCombine setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/ManulCombine"
          element={
            <Adminprivateroute>
              <ManulCombine setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/OnlineCombine"
          element={
            <Adminprivateroute>
              <OnlineCombine setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/HoldCertificate"
          element={
            <Adminprivateroute>
              <HoldCertificate setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Holdprint"
          element={
            <Adminprivateroute>
              <Holdprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Onlycheckin"
          element={
            <Adminprivateroute>
              <Onlychecking setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/AllCheckoutPrint"
          element={
            <Adminprivateroute>
              <AllCheckoutPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/AllChoutRecript"
          element={
            <Adminprivateroute>
              <AllChoutRecript setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/ForceCheckoutHistory"
          element={
            <Adminprivateroute>
              <ForceCheckoutHistory setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Allforcecheckout"
          element={
            <Adminprivateroute>
              <Allforcecheckout setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Allforcecheckoutprint"
          element={
            <Adminprivateroute>
              <Allforcecheckoutprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/AllcancalPrint"
          element={
            <Adminprivateroute>
              <AllcancalPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Allcencal"
          element={
            <Adminprivateroute>
              <Allcencal setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/Forcheckouthistory"
          element={
            <Adminprivateroute>
              <Forcheckouthistory setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Forcecheckoutprint"
          element={
            <Adminprivateroute>
              <Forcecheckoutprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/Acancelprint"
          element={
            <Adminprivateroute>
              <Acancelprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/ACancel"
          element={
            <Adminprivateroute>
              <ACancel setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/AllReceipt"
          element={
            <Adminprivateroute>
              <AllReceipt setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/AllReceiptprint"
          element={
            <Adminprivateroute>
              <AllReceiptprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/Newdashboard"
          element={
            <Adminprivateroute>
              <Newdashboard setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/ReceiptAllcheckout"
          element={
            <Adminprivateroute>
              <ReceiptAllcheckout setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/ReceiptAllcheckoutprint"
          element={
            <Adminprivateroute>
              <ReceiptAllcheckoutprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/HistoryAllCheckout"
          element={
            <Adminprivateroute>
              <HistoryAllCheckout setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/HistoryAllCheckoutPrint"
          element={
            <Adminprivateroute>
              <HistoryAllCheckoutPrint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/Newcheckin"
          element={
            <Adminprivateroute>
              <Newcheckin setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/CancelOnlyprint"
          element={
            <Adminprivateroute>
              <CancelOnlyprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/room/CancelOnlyreciept"
          element={
            <Adminprivateroute>
              <CancelOnlyreciept setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/Onlinecheckouthistort"
          element={
            <Adminprivateroute>
              <Onlinecheckouthistort setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/room/Onlinecheckouthistoryprint"
          element={
            <Adminprivateroute>
              <Onlinecheckouthistoryprint setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli/BoliHistory"
          element={
            <Adminprivateroute>
              <BoliHistory setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/OnlinecheckHistotry"
          element={
            <Adminprivateroute>
              <OnlinecheckHistotry setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/PaidBoli"
          element={
            <Adminprivateroute>
              <PaidBoli setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli/BoliGroup"
          element={
            <Adminprivateroute>
              <BoliGroup setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
        <Route
          path="/admin-panel/boli/BoliVoucher"
          element={
            <Adminprivateroute>
              <BoliVoucher setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

        <Route
          path="/admin-panel/boli/BoliLedger1"
          element={
            <Adminprivateroute>
              <BoliLedger1 setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />

<Route
          path="/admin-panel/boli/boliledger/tally"
          element={
            <Adminprivateroute>
              <Tally setopendashboard={setopendashboard} />
            </Adminprivateroute>
          }
        />
      </Routes>
    </>
  );
}

export default AdminRoutes;
