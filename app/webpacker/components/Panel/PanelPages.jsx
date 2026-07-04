import {
  countryBandsUrl,
  subordinateDelegateClaimsUrl,
  subordinateUpcomingCompetitionsUrl,
  generateDbTokenUrl,
  sanityCheckResultsUrl,
  serverStatusPageUrl,
  mergeProfilesUrl,
} from '../../lib/requests/routes.js.erb';
import { PANEL_PAGES } from '../../lib/wca-data.js.erb';
import DelegateProbations from '../DelegateProbations';
import PostingCompetitionsTable from '../PostingCompetitions';
import AnonymizationScriptPage from './pages/AnonymizationScriptPage';
import ApprovePictures from './pages/ApprovePictures';
import BannedCompetitorsPage from './pages/BannedCompetitorsPage';
import BoardEditorPage from './pages/BoardEditorPage';
import CheckRecordsPage from './pages/CheckRecordsPage';
import ComputeAuxiliaryDataPage from './pages/ComputeAuxiliaryDataPage';
import CreateNewcomersPage from './pages/CreateNewcomersPage';
import DelegateForms from './pages/DelegateForms';
import DownloadVoters from './pages/DownloadVoters';
import DuesExport from './pages/DuesExport';
import DuesRedirect from './pages/DuesRedirect';
import EditPersonPage from './pages/EditPersonPage';
import EditPersonRequestsPage from './pages/EditPersonRequestsPage';
import FixResultsPage from './pages/FixResultsPage';
import GenerateDataExportsPage from './pages/GenerateDataExportsPage';
import GroupsManager from './pages/GroupsManager';
import GroupsManagerAdmin from './pages/GroupsManagerAdmin';
import HelpfulQueriesPage from './pages/HelpfulQueriesPage';
import ImportantLinks from './pages/ImportantLinks';
import LeaderForms from './pages/LeaderForms';
import LeadersAdminPage from './pages/LeadersAdminPage';
import MergeUsersPage from './pages/MergeUsersPage';
import OfficersEditor from './pages/OfficersEditor';
import RegionManager from './pages/RegionManager';
import Regions from './pages/Regions';
import RegionsAdmin from './pages/RegionsAdmin';
import RunValidatorsForm from './pages/RunValidatorsPage/RunValidatorsForm';
import SeniorDelegatesList from './pages/SeniorDelegatesList';
import Translators from './pages/Translators';
import XeroUsers from './pages/XeroUsers';

export default {
  [PANEL_PAGES.postingDashboard]: {
    name: 'Posting Dashboard',
    component: PostingCompetitionsTable,
  },
  [PANEL_PAGES.editPerson]: {
    name: 'Edit Person',
    component: EditPersonPage,
  },
  [PANEL_PAGES.regionsManager]: {
    name: 'Regions Manager',
    component: RegionManager,
  },
  [PANEL_PAGES.groupsManagerAdmin]: {
    name: 'Groups Manager Admin',
    component: GroupsManagerAdmin,
  },
  [PANEL_PAGES.bannedCompetitors]: {
    name: 'Banned Competitors',
    component: BannedCompetitorsPage,
  },
  [PANEL_PAGES.translators]: {
    name: 'Translators',
    component: Translators,
  },
  [PANEL_PAGES.duesExport]: {
    name: 'Dues Export',
    component: DuesExport,
  },
  [PANEL_PAGES.countryBands]: {
    name: 'Country Bands',
    link: countryBandsUrl,
  },
  [PANEL_PAGES.delegateProbations]: {
    name: 'Delegate Probations',
    component: DelegateProbations,
  },
  [PANEL_PAGES.xeroUsers]: {
    name: 'Xero Users',
    component: XeroUsers,
  },
  [PANEL_PAGES.duesRedirect]: {
    name: 'Dues Redirect',
    component: DuesRedirect,
  },
  [PANEL_PAGES.delegateForms]: {
    name: 'Delegate Forms',
    component: DelegateForms,
  },
  [PANEL_PAGES.regions]: {
    name: 'Regions',
    component: Regions,
  },
  [PANEL_PAGES.subordinateDelegateClaims]: {
    name: 'Subordinate Delegate Claims',
    link: subordinateDelegateClaimsUrl,
  },
  [PANEL_PAGES.subordinateUpcomingCompetitions]: {
    name: 'Subordinate Upcoming Competitions',
    link: subordinateUpcomingCompetitionsUrl,
  },
  [PANEL_PAGES.leaderForms]: {
    name: 'Leader Forms',
    component: LeaderForms,
  },
  [PANEL_PAGES.groupsManager]: {
    name: 'Groups Manager',
    component: GroupsManager,
  },
  [PANEL_PAGES.importantLinks]: {
    name: 'Important Links',
    component: ImportantLinks,
  },
  [PANEL_PAGES.seniorDelegatesList]: {
    name: 'Senior Delegates List',
    component: SeniorDelegatesList,
  },
  [PANEL_PAGES.leadersAdmin]: {
    name: 'Leaders Admin',
    component: LeadersAdminPage,
  },
  [PANEL_PAGES.boardEditor]: {
    name: 'Board Editor',
    component: BoardEditorPage,
  },
  [PANEL_PAGES.officersEditor]: {
    name: 'Officers Editor',
    component: OfficersEditor,
  },
  [PANEL_PAGES.regionsAdmin]: {
    name: 'Regions Admin',
    component: RegionsAdmin,
  },
  [PANEL_PAGES.downloadVoters]: {
    name: 'Download Voters',
    component: DownloadVoters,
  },
  [PANEL_PAGES.generateDbToken]: {
    name: 'Generate DB Token',
    link: generateDbTokenUrl,
  },
  [PANEL_PAGES.sanityCheckResults]: {
    name: 'Sanity Check Results',
    link: sanityCheckResultsUrl,
  },
  [PANEL_PAGES.approveAvatars]: {
    name: 'Approve Avatars',
    component: ApprovePictures,
  },
  [PANEL_PAGES.editPersonRequests]: {
    name: 'Edit Person Requests',
    component: EditPersonRequestsPage,
  },
  [PANEL_PAGES.anonymizationScript]: {
    name: 'Anonymization Script',
    component: AnonymizationScriptPage,
  },
  [PANEL_PAGES.serverStatus]: {
    name: 'Server Status',
    link: serverStatusPageUrl,
  },
  [PANEL_PAGES.runValidators]: {
    name: 'Run Validators',
    component: RunValidatorsForm,
  },
  [PANEL_PAGES.createNewComers]: {
    name: 'Create Newcomers',
    component: CreateNewcomersPage,
  },
  [PANEL_PAGES.checkRecords]: {
    name: 'Check Records',
    component: CheckRecordsPage,
  },
  [PANEL_PAGES.computeAuxiliaryData]: {
    name: 'Compute Auxiliary Data',
    component: ComputeAuxiliaryDataPage,
  },
  [PANEL_PAGES.generateDataExports]: {
    name: 'Generate Data Exports',
    component: GenerateDataExportsPage,
  },
  [PANEL_PAGES.fixResults]: {
    name: 'Fix Results',
    component: FixResultsPage,
  },
  [PANEL_PAGES.mergeProfiles]: {
    name: 'Merge Profiles',
    link: mergeProfilesUrl,
  },
  [PANEL_PAGES.mergeUsers]: {
    name: 'Merge Users',
    component: MergeUsersPage,
  },
  [PANEL_PAGES.helpfulQueries]: {
    name: 'Helpful Queries',
    component: HelpfulQueriesPage,
  },
};
