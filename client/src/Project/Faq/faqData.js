const faqCategories = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'How do I create a new issue?',
        answer:
          'Click the "Create Issue" button in the left navigation bar (the + icon). Fill in the issue type, summary, description, priority, and assignees, then press "Create Issue". The new issue will appear on your Kanban board in the Backlog column.',
      },
      {
        question: 'How do I invite team members to a project?',
        answer:
          'Project members are managed by the project administrator. Reach out to them with the email addresses of the people you\'d like to add, and they can invite them to the project. Once invited, members can be assigned to issues and added as reporters.',
      },
      {
        question: 'What is the difference between a task, a story, and a bug?',
        answer:
          'A task is a general piece of work to be done. A story describes a feature from the user\'s perspective. A bug represents a defect or error that needs fixing. Pick the type that best describes the work when creating an issue.',
      },
    ],
  },
  {
    title: 'Boards & Issues',
    items: [
      {
        question: 'How do I move an issue between columns?',
        answer:
          'Drag and drop the issue card to the desired column on the Kanban board. You can also reorder issues within the same column by dragging them up or down. Changes are saved automatically.',
      },
      {
        question: 'What do the board columns represent?',
        answer:
          'The board columns map to issue statuses: Backlog, Selected for Development, In Progress, and Done. An issue\'s position reflects where it currently sits in your workflow.',
      },
      {
        question: 'How do I change an issue\'s priority?',
        answer:
          'Open the issue by clicking on it, then use the Priority dropdown in the right-hand panel. You can choose from Highest, High, Medium, Low, and Lowest.',
      },
      {
        question: 'How do I assign an issue to someone?',
        answer:
          'Open the issue and use the Assignees dropdown in the right-hand panel to select one or more project members. You can also set a reporter for the issue.',
      },
      {
        question: 'How do I delete an issue?',
        answer:
          'Open the issue and click the trash icon in the top-right corner of the issue details. Confirm the deletion in the dialog. Please note that deleting an issue cannot be undone.',
      },
    ],
  },
  {
    title: 'Search & Filters',
    items: [
      {
        question: 'How do I search for an issue?',
        answer:
          'Click the search icon in the left navigation bar to open the issue search. Type part of the issue title or description and matching issues will appear as you type.',
      },
      {
        question: 'Can I filter the board to see only my issues?',
        answer:
          'Yes. On the Kanban board, click your avatar in the filter row to show only issues assigned to you. You can combine this with the text search field to narrow things down further.',
      },
      {
        question: 'How do I clear all active filters?',
        answer:
          'Click the "Clear all" button next to the filter row on the board. This removes any search text and user filters and shows the full board again.',
      },
    ],
  },
  {
    title: 'Project Settings',
    items: [
      {
        question: 'How do I rename the project?',
        answer:
          'Go to "Project settings" in the sidebar, edit the Name field, and click "Save changes". The new name is reflected immediately across the app.',
      },
      {
        question: 'How do I change the project category?',
        answer:
          'In Project settings, use the Project Category dropdown to switch between Software, Marketing, and Business, then save your changes.',
      },
      {
        question: 'Where do I update the project description?',
        answer:
          'The description can be edited in Project settings using the rich text editor. Use it to document goals, conventions, and anything else your team should know.',
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        question: 'How do I update my profile information?',
        answer:
          'Your profile details (name and avatar) are tied to your account. Contact your administrator if you need any of these details changed.',
      },
      {
        question: 'What do the issue priorities mean?',
        answer:
          'Priorities range from Highest (urgent, drop everything) to Lowest (nice to have). Use them consistently so the team knows what to pick up next.',
      },
      {
        question: 'Where can I report a problem with the app?',
        answer:
          'Use the "Give feedback" option or reach out to the project administrator. Include what you were doing when the problem occurred so it can be reproduced and fixed.',
      },
    ],
  },
];

export default faqCategories;
