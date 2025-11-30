import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app';
import { collegesReducer, collegeApplicationsReducer, collegeEssaysReducer } from './dumps';
import { collegeBuilderReducer, collegeApplicationBuilderReducer, collegeEssayBuilderReducer, navBuilderReducer } from './builders';
import { currentCollegeReducer, currentCollegeApplicationReducer, currentCollegeEssayReducer } from './current';

const rootReducer = combineReducers({
  app: appReducer,

  // Dumps
  colleges: collegesReducer,
  collegeApplications: collegeApplicationsReducer,
  collegeEssays: collegeEssaysReducer,

  // Builders
  collegeBuilder: collegeBuilderReducer,
  collegeApplicationBuilder: collegeApplicationBuilderReducer,
  collegeEssayBuilder: collegeEssayBuilderReducer,
  navBuilder: navBuilderReducer,

  // Current
  currentCollege: currentCollegeReducer,
  currentCollegeApplication: currentCollegeApplicationReducer,
  currentCollegeEssay: currentCollegeEssayReducer,
});

export default rootReducer;
