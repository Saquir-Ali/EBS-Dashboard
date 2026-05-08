export type Module = {
  code: string;
  label: string;
  pct: number;
  color: string;
  bg: string;
  topics: string[];
  done: number[];
};

export const modules: Module[] = [
  {
    code: 'M01', label: 'EBS Foundation', pct: 100, color: '#1e4030', bg: '#d6ede4',
    topics: ['Navigation & responsibilities', 'AOL setup concepts', 'Profile options', 'Menu/Function security', 'Concurrent managers', 'Request groups', 'Value sets'],
    done: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: 'M02', label: 'PL/SQL for EBS', pct: 100, color: '#2e3a4a', bg: '#d4dce7',
    topics: ['Packages & procedures', 'Exception handling', 'Cursors & bulk collect', 'Dynamic SQL', 'DBMS_OUTPUT & logging', 'APPS schema access', 'UTL_FILE'],
    done: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: 'M03', label: 'Order to Cash', pct: 100, color: '#5a2d0c', bg: '#f0d7c6',
    topics: ['Sales order entry', 'Pricing & modifiers', 'Pick/Pack/Ship', 'AR invoicing', 'Revenue recognition', 'Order workflow', 'Credit checking'],
    done: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: 'M04', label: 'Procure to Pay', pct: 100, color: '#1e3a20', bg: '#cfe3d1',
    topics: ['Requisitions', 'Purchase orders', 'Receiving (RCVT)', 'AP invoice matching', 'Payment process', 'Accruals', 'Vendor setup'],
    done: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: 'M05', label: 'Oracle Workflow', pct: 100, color: '#3d2260', bg: '#ddd2f0',
    topics: ['Workflow Builder basics', 'Item types & attributes', 'Processes & activities', 'Notifications', 'WFERROR queue', 'Custom workflows', 'API calls'],
    done: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: 'M06', label: 'Interfaces & APIs', pct: 100, color: '#6b1c1c', bg: '#f0d0d0',
    topics: ['MTL_TRANSACTIONS_INTERFACE', 'Customer Interface', 'Item Import', 'Open PO Interface', 'AR AutoInvoice', 'Error handling', 'Staging tables'],
    done: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: 'M07', label: 'Software Engineering', pct: 100, color: '#2a4a3a', bg: '#cce0d7',
    topics: ['SDLC & Git flow', 'Code review practice', 'Testing strategies', 'Documentation', 'Design patterns', 'Debugging methods', 'Deployment'],
    done: [0, 1, 2, 3, 4, 5, 6]
  }
];

export type Milestone = {
  label: string;
  date: string;
  color: string;
};

export const milestones: Milestone[] = [
  { label: 'Successfully completed Capgemini Internship', date: 'Apr 21, 2026', color: '#c9922a' },
  { label: 'Completed 50-question mock test', date: 'Apr 2026', color: '#2a6b3e' },
  { label: 'Built MTL Interface (11-step walkthrough)', date: 'Apr 15', color: '#1a5080' },
  { label: 'LMN Engineering R12 project live', date: 'Apr 14', color: '#8b3a1c' },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  referenceNo?: string;
  mentor?: string;
};

export const certifications: Certification[] = [
  {
    id: 'cert-capgemini',
    title: 'Internship Completion Certificate',
    issuer: 'Capgemini Technology Services India Limited',
    issueDate: 'April 21, 2026',
    description: 'Successfully completed internship with Capgemini from February 19, 2026 to April 21, 2026.',
    referenceNo: '9403542397',
    mentor: 'Ms. Virgin Joao Dsouza',
  }
];
